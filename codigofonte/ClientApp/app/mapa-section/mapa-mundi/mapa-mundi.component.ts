import {
    Component,
    Input,
    ChangeDetectionStrategy,
    NgZone,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import {
    Pais,
    LocalidadeService,
    RouterParamsService,
    MetadataIndicador,
} from '../../shared';

import * as L from 'leaflet';
import { MAP_STYLES } from '../mapa.configurations';
import { takeUntil, map, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '../../translate/translate.service';

export enum CSS_CLASSES {
    SELECTED = 'leaflet--selected-layer',
    NORMAL = 'leaflet--interactive-layer',
    IGNORE = 'leaflet--uninteractive-layer',
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mapa-mundi',
    templateUrl: './mapa-mundi.component.html',
    styleUrls: ['./mapa-mundi.component.css'],
    host: { class: 'bg-layer' },
})
export class MapaMundiComponent implements OnInit, OnDestroy {
    @Input() link: string[] = [];
    @Input() dados: any = null;

    @Input()
    set pais(value: Pais) {
        const layerArray = value ? this._layers.get(value.sigla3) || [] : [];

        if (this._selecteds.length > 0) {
            this._selecteds.forEach(layer => this.unselectLayer(layer, value));
        }

        if (layerArray.length > 0 && this._map) {
            layerArray.forEach((layer: any) => {
                this.selectLayer(layer, value);
                this._selecteds.push(layer);
                debugger;
                layer.openTooltip();
            });
        }

        if (this._pais && this._map) {
            this._map.fitBounds(this._selecteds[0].getBounds());
        }

        this._pais = value || null;
    }

    @Input()
    set malha(malha: GeoJSON.GeoJsonObject) {
        if (!malha) {
            return;
        }
        const layer: L.LayerGroup = L.geoJSON(malha, {
            style: feature => this._featureStyle(this, feature),

            onEachFeature: (
                feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>,
                layer: L.Layer
            ) => {
                this._setOnEachFeatureListeners(feature, layer, this);
            },

            attribution:
                'Mapa fornecido por <a target="_blank" href="https://www.naturalearthdata.com/downloads/10m-cultural-vectors/"><strong>Natural Earth</strong> «<small>Cultural Map, 1:10m, v 4.1.0</small>»</a>.',
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
    ) {}

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
        map.setMaxBounds(
            L.latLngBounds(L.latLng(-200, -200), L.latLng(360, 300))
        );

        if (this._selecteds.length > 0) {
            map.fitBounds(this._selecteds[0].getBounds());
        } else {
            map.fitWorld({ maxZoom: 5 });

            if (this._pais) {
                const layers = this._layers.get(this._pais.sigla3) || [];
                setTimeout(
                    () =>
                        layers.forEach(layer =>
                            this.selectLayer(layer, this._pais!)
                        ),
                    0
                );
            }
        }
    }

    selectLayer(layer: any, newSelected: Pais) {
        if (layer) {
            const el = layer.getElement();
            el.classList.add(CSS_CLASSES.SELECTED);
            this._selecteds = [...this._selecteds, layer];
            const pais = this._localidadeService.getPaisBySigla(
                layer.feature.properties.sigla
            );
            layer.unbindTooltip();
            this.bindTooltip(layer, pais!, newSelected);
        }
    }

    unselectLayer(layer: any, newSelected: Pais) {
        if (layer) {
            const el = layer.getElement();
            el.classList.remove(CSS_CLASSES.SELECTED);
            const pais = this._localidadeService.getPaisBySigla(
                layer.feature.properties.sigla
            );
            layer.unbindTooltip();
            this.bindTooltip(layer, pais!, newSelected);
            this._selecteds = this._selecteds.filter(
                selected => selected !== layer
            );
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
                    (<any>(
                        this._layers.get(layer.feature.properties.sigla)
                    )).push(layer);
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
                        this._map &&
                            this._map.fitBounds((<any>layer).getBounds());
                        this._router.navigate(
                            this._router.url.indexOf('ranking') >= 0
                                ? ['/mapa', 'ranking', pais.slug]
                                : ['/mapa', pais.slug],
                            {
                                queryParamsHandling: 'preserve',
                                relativeTo: this._route,
                            }
                        );
                    }
                });
            },
        });
    }

    private bindTooltip(layer: any, pais: Pais, selected: Pais) {
        if (!pais) {
            return;
        }

        const feature = layer.feature;
        const paisNome = pais.nome;

        const getMsg = () => {
            const idiomaId = this._translateService.currentLanguage.id as
                | 'en'
                | 'es'
                | 'pt';

            return (
                paisNome[idiomaId] +
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
                    : '')
            );
        };

        layer.bindTooltip(getMsg, {
            permanent:
                (selected && selected.sigla) || (this._pais && this._pais.sigla)
                    ? pais.sigla === (selected.sigla || this._pais!.sigla)
                    : false,
            opacity: 0.75,
        });
    }

    private _popup(feature: any, layer: any, context: any) {
        const pais = context._localidadeService.getPaisBySigla(
            feature.properties.sigla
        );

        // const getMsg = () => {
        //     const idiomaId = this._translateService.currentLanguage.id;

        //     return (
        //         pais.nome[idiomaId] +
        //         (feature.properties.nota
        //             ? ` (${feature.properties.nota[idiomaId]})`
        //             : '') +
        //         (feature.properties.valor
        //             ? `<br /> <strong><small>${this._decimalPipe.transform(
        //                   feature.properties.valor
        //               )} ${
        //                   this.indicador
        //                       ? this._translateService.translate(
        //                             this.indicador.unidade.identificador
        //                         )
        //                       : ''
        //               }<small></strong>`
        //             : '')
        //     );
        // };

        if (pais) {
            this.bindTooltip(layer, pais, this._pais!);
            // layer.bindTooltip(getMsg, {
            //     permanent: this._pais ? pais.sigla === this._pais.sigla : false,
            //     opacity: 0.75,
            // });

            // layer.on({
            //     mouseup: (evt: any) => {
            //         debugger;
            //         layer.setTooltipContent(getMsg())
            //         layer.openTooltip();
            //     },
            //     mouseout: (evt: any) => {
            //         layer.closeTooltip();
            //     },
            // });
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
