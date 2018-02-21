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
export class MapaMundiComponent implements OnInit, OnChanges {
    @Input() malha: L.GeoJSON | null = null;
    @Input() pais: Pais | null = null;

    public mapOptions = MAP_STYLES.options;
    public leafletLayers: L.Layer;

    private _geoJsonLayer: L.GeoJSON;
    private _map$ = new Subject<L.Map>();
    private _pais$ = new BehaviorSubject<Pais | null>(null);
    private _topology$ = new Subject<G.GeoJsonObject>();
    private _paisLayerMap: Map<string, L.Layer>;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _ngzone: NgZone
    ) {
        const buildGeoJsonMap$ = Observable.combineLatest(this._map$, this._topology$)
            .filter(([map, topology]) => Boolean(map) && Boolean(topology));

        const buildGeoJsonMapSubscription = buildGeoJsonMap$.subscribe(([map, topology]) => {
            let geoJsonLayer = new L.GeoJSON(topology, {
                style: this._featureStyle
            });

            this._updatePaisLayerMap(geoJsonLayer);

            
            this.leafletLayers = geoJsonLayer;
        });

        const selectPaisSubscription = Observable.combineLatest(buildGeoJsonMap$, this._pais$).
    }

    ngOnInit() {
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
        const { mostrar, style } = feature.properties;

        if (!mostrar) {
            return style.uninteractive;
        }

        // if (feature.properties.slug === this.paisSelecionado) {
        //     return style.selected;
        // }

        return style.default;
    };

    private _updatePaisLayerMap(geoJsonLayer: L.LayerGroup) {
        this._paisLayerMap = geoJsonLayer.getLayers().reduce( (map, layer) => {
            
        }, new Map());
    }


}


