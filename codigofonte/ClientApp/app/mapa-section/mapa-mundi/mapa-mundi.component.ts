import {
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChange,
    SimpleChanges,
    Input,
    PLATFORM_ID,
    Inject,
    NgZone,
    ChangeDetectorRef,
    ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import * as G from 'geojson';
import * as L from 'leaflet';

import { MAP_STYLES } from './mapa.configurations';
import {
    LocalidadeService,
    MalhaService,
    Pais,
    RouterParamsService,
    PlatformDetectionService
} from '../../shared';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';


@Component({
    selector: 'mapa-mundi',
    templateUrl: './mapa-mundi.component.html',
    styleUrls: [
        './mapa-mundi.component.css'
    ],
    host: {
        'class': 'bg-layer'
    }
})
export class MapaMundiComponent implements  OnDestroy, OnChanges {
    @Input() malha: L.GeoJSON | null = null;
    @Input() pais: Pais | null = null;
    @Input() link = ["."];

    public mapOptions = MAP_STYLES.options;
    public leafletLayers: L.Layer[] = [];
    public paisSelecionado = {
        slug: "",
        layer: <L.Layer|null>null
    };

    private _map$ = new BehaviorSubject<L.Map|null>(null);
    private _pais$ = new BehaviorSubject<Pais | null>(null);
    private _topology$ = new BehaviorSubject<G.GeoJsonObject|undefined>(undefined);
    private _paisLayerMap: Map<string, L.Layer>;
    private _subscriptions: Subscription[] = [];

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _changeDetector: ChangeDetectorRef,
        private _ngzone: NgZone
    ) {}

    ngOnInit() {
        const buildGeoJsonMap$ = Observable.combineLatest(this._map$, this._topology$)
            .filter(([map, topology]) => Boolean(map) && Boolean(topology));

        const geoJson$ = buildGeoJsonMap$.pipe(
            map(([map, topology]) => {
                return new L.GeoJSON(topology, {
                    style: this._featureStyle.bind(this),
                    onEachFeature: this._setOnEachFeatureListeners.bind(this)
                });
            })
        );

        const leafletLayersSubscription = geoJson$.subscribe(geoJsonLayer => { 
            this.leafletLayers.push(geoJsonLayer); 
            this._updatePaisLayerMap(geoJsonLayer);
        })

        const selectPaisSubscription = Observable.combineLatest(
            geoJson$, this._pais$
        ).subscribe(([geoJsonLayer, pais]) => {
            const slug = pais ? pais.slug : "";
            const layer = this._getLayer(slug);

            setTimeout(() => this._selectPais(slug, layer), 0);
        });

        this._subscriptions.push(leafletLayersSubscription, selectPaisSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    ngOnChanges({ malha, pais }: { [key: string]: SimpleChange }) {
        if (malha && malha.currentValue && malha.currentValue !== malha.previousValue) {
            this._topology$.next(malha.currentValue);
        }

        if (pais && pais.currentValue !== pais.previousValue) {
            this._pais$.next(pais.currentValue || null);
        }
    }

    onMapReady(map: L.Map) {
        map.invalidateSize();
        map.fitWorld({ maxZoom: 8 });
        map.setMaxBounds(new L.LatLngBounds(new L.LatLng(-60, -179), new L.LatLng(90, 179)));

        this._map$.next(map);
    }

    private _featureStyle(feature: any) {
        const { style, slug } = feature.properties;

        if (feature.properties.slug === this.paisSelecionado.slug) {
            return style.selected;
        }

        return style.default;
    };

    private _updatePaisLayerMap(geoJsonLayer: L.LayerGroup) {
        this._paisLayerMap = geoJsonLayer.getLayers().reduce((map, layer) => {
            //@ts-ignore
            const { slug } = layer.feature.properties;
            map.set(slug, layer);
            return map;
        }, new Map());
        (<any>window).map = this._paisLayerMap;
    }

    private _getLayer(slugPais: string) {
        return this._paisLayerMap.has(slugPais)
            ? (<L.Layer>this._paisLayerMap.get(slugPais))
            : null;
    }

    private _selectPais(slugPais: string, layerPais: L.Layer|null) {
        if (this.paisSelecionado.layer) {
            this._setLayerStyle(this.paisSelecionado.layer, 'default');
        }
        
        if (layerPais) {
            this._setLayerStyle(layerPais, 'selected');
        }
        
        this.paisSelecionado = {
            slug: slugPais,
            layer: layerPais
        }
    }

    private _setLayerStyle(layer: any, styleKey: string) {
        const style = layer.feature.properties.style;
        layer.setStyle(style[styleKey]);
    }

    private _setOnEachFeatureListeners(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) {
        if (feature.properties.mostrar) {
            // this._handleTooltip(feature, layer);
            this._onClickMap(layer);
            this._onHoverLayer(feature, layer);
        }
    }


    private _onHoverLayer(feature: any, layer: any) {
        const that = this;
        layer.on({
            mouseover: () => layer.setStyle(MAP_STYLES.polygons.hover),
            mouseout: () => {
                const {slug, style} = feature.properties;

                that.paisSelecionado.slug == slug
                    ? layer.setStyle(style.selected)
                    : layer.setStyle(style.default)
            }
        });
    }

    private _onClickMap(layer: L.Layer) {
        const that = this;
        layer.on({
            click: (evt) => {
                that._ngzone.run(() => {
                    this._router.navigate(this.link.concat(evt.target.feature.properties.slug), { relativeTo: this._route })
                });
			}
        });
    }

}


