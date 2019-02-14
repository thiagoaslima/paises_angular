import {
  Component,
  Input,
  ChangeDetectionStrategy,
  NgZone,
  OnInit,
  OnDestroy
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import {
  Pais,
  LocalidadeService,
  RouterParamsService,
  MetadataIndicador,
  PaisesService
} from '../../shared';

import * as L from 'leaflet';
import { MAP_STYLES } from '../mapa.configurations';
import { takeUntil, map, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '../../translate/translate.service';

export enum CSS_CLASSES {
  SELECTED = 'leaflet--selected-layer',
  NORMAL = 'leaflet--interactive-layer',
  IGNORE = 'leaflet--uninteractive-layer'
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mapa-mundi',
  templateUrl: './mapa-mundi.component.html',
  styleUrls: ['./mapa-mundi.component.css'],
  host: { class: 'bg-layer' }
})
export class MapaMundiComponent implements OnInit, OnDestroy {
  @Input() link: string[] = [];
  @Input() dados: any = null;

  @Input()
  set pais(value: Pais) {
    const layerArray = value ? this._layers.get(value.sigla3) || [] : [];

    if (this._selecteds.length > 0) {
      this._selecteds.forEach(layer => this.unselectLayer(layer));
    }

    if (layerArray.length > 0 && this._map) {
      layerArray.forEach((layer: any) => {
        this.selectLayer(layer);
        this._selecteds.push(layer);
      });
    }

    if (this._pais && this._map) {
      this._map.fitBounds(this._selecteds[0].getBounds());
    }

    this._pais = value || null;
  }

  @Input()
  set malha(malha: GeoJSON.GeoJsonObject) {
    const layer: L.LayerGroup = L.geoJSON(malha, {
      style: feature => this._featureStyle(this, feature),

      onEachFeature: (
        feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>,
        layer: L.Layer
      ) => {
        this._setOnEachFeatureListeners(feature, layer, this);
      }
    });

    this.leafletLayers = [layer];
    this._registerLayers(layer.getLayers());
  }

  public mapOptions = MAP_STYLES.options;
  public leafletLayers: L.LayerGroup[] = [];
  public ano = '';

  @Input() indicador: MetadataIndicador | null = null;
  private destroy$ = new Subject<void>();

  private _selecteds: any[] = [];
  private _layers = new Map<string, L.Layer[]>();
  private _map: L.Map | null = null;
  private _pais: Pais | null = null;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _routerParams: RouterParamsService,
    private _ngzone: NgZone,
    private _localidadeService: LocalidadeService,
    private _translateService: TranslateService,
    private _decimalPipe: DecimalPipe
  ) { }

  ngOnInit() {
    this._routerParams.params$
      .pipe(
      takeUntil(this.destroy$),
      map(params => params.queryParams),
      map(queryParams => queryParams.ano),
      distinctUntilChanged()
      )
      .subscribe(ano => (this.ano = ano));
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onMapReady(map: L.Map) {
    this._map = map;

    map.invalidateSize();
    map.setMaxBounds(L.latLngBounds(L.latLng(-200, -200), L.latLng(360, 300)));

    if (this._selecteds.length > 0) {
      map.fitBounds(this._selecteds[0].getBounds());
    } else {
      map.fitWorld({ maxZoom: 5 });

      if (this._pais) {
        const layers = this._layers.get(this._pais.sigla3) || [];
        setTimeout(() => layers.forEach(layer => this.selectLayer(layer)), 0);
      }
    }
  }

  selectLayer(layer: any) {
    if (layer) {
      const el = layer.getElement();
      el.classList.add(CSS_CLASSES.SELECTED);
      this._selecteds = [...this._selecteds, layer];
    }
  }

  unselectLayer(layer: any) {
    if (layer) {
      const el = layer.getElement();
      el.classList.remove(CSS_CLASSES.SELECTED);
      this._selecteds = this._selecteds.filter(selected => selected !== layer);
    }
  }

  private _featureStyle(context: any, feature: any) {
    const { style, sigla } = feature.properties;

    if (style.fillColor) {
      return style;
    }

    if (!context._localidadeService.getPaisBySigla(sigla)) {
      return Object.assign({}, style, { className: CSS_CLASSES.IGNORE });
    }

    return Object.assign({}, style, { className: CSS_CLASSES.NORMAL });
  }

  private _registerLayers(layers: any) {
    this._layers.clear();
    layers.forEach((layer: any) => {
      if (layer.feature && layer.feature.properties) {
        if (this._layers.has(layer.feature.properties.sigla)) {
          (<any>this._layers.get(layer.feature.properties.sigla)).push(layer);
        } else {
          this._layers.set(layer.feature.properties.sigla, [layer]);
        }
      }
    });
  }

  private _onClickMap(layer: L.Layer) {
    const that = this;
    layer.on({
      click: evt => {
        that._ngzone.run(() => {
          const pais = this._localidadeService.getPaisBySigla(
            evt.target.feature.properties.sigla
          );
          if (pais) {
            this._map && this._map.fitBounds((<any>layer).getBounds());
            this._router.navigate(
              this._router.url.indexOf('ranking') >= 0
                ? ['/mapa', 'ranking', pais.slug]
                : ['/mapa', pais.slug],
              {
                queryParamsHandling: 'preserve',
                relativeTo: this._route
              }
            );
          }
        });
      }
    });
  }

  private _popup(feature: any, layer: any, context: any) {
    const pais = context._localidadeService.getPaisBySigla(
      feature.properties.sigla
    );
    const idiomaId = this._translateService.currentLanguage.id;

    if (pais) {
      const msg =
        pais.nome[idiomaId] +
        (feature.properties.nota
          ? ` (${feature.properties.nota[idiomaId]})`
          : '') +
        (feature.properties.valor
          ? `<br /> <strong><small>${this._decimalPipe.transform(
            feature.properties.valor
          )} ${
          this.indicador
            ? this._translateService.translate(
              this.indicador.unidade.identificador
            )
            : ''
          }<small></strong>`
          : '');
      layer.bindTooltip(msg);

      layer.on({
        mouseup: (evt: any) => {
          layer.openTooltip();
        },
        mouseout: (evt: any) => {
          layer.closeTooltip();
        }
      });
    }
  }

  private _setOnEachFeatureListeners(
    feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>,
    layer: L.Layer,
    context: any
  ) {
    context._onClickMap(layer);
    context._popup(feature, layer, context);
  }
}
