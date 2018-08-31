import {
    Component,
    Input,
    PLATFORM_ID,
    ChangeDetectionStrategy,
    NgZone
} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {
    PlatformDetectionService, 
    Pais,
    LocalidadeService
} from '../../shared';

import * as L from "leaflet";
import { MAP_STYLES } from "../mapa.configurations";


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mapa-mundi',
    templateUrl: './mapa-mundi.component.html',
    styleUrls: ['./mapa-mundi.component.css'],
    host: { 'class': 'bg-layer' }
})
export class MapaMundiComponent {
    @Input() pais: Pais;
    @Input() link: string[];

    @Input() set malha(malha: GeoJSON.GeoJsonObject) {
        const layer: L.LayerGroup = new L.GeoJSON(malha, {
            style: (feature) => this._featureStyle(this, feature),
            onEachFeature: (feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) => {
                this._setOnEachFeatureListeners(feature, layer, this);
            }
        });

        this.leafletLayers = [layer];
        this._registerLayers(layer);
    }

    public mapOptions = MAP_STYLES.options;
    public leafletLayers: L.LayerGroup[] = [];
    private _Layers = new Map();

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _ngzone: NgZone,
        private _localidadeService: LocalidadeService
    ) {}

    onMapReady(map: L.Map) {
        map.invalidateSize();
        map.fitWorld({ maxZoom: 5 });
        map.setMaxBounds(L.latLngBounds(L.latLng(-60, -179), L.latLng(90, 179)));
    }

    private _featureStyle(context: any, feature: any) {
        const { style, sigla } = feature.properties;

        if (context.pais && this.pais.sigla3 === sigla) {
            return Object.assign({}, style.default, style.selected);
        }

        return style.default;
    };

    private _registerLayers(layer: any) {
        this._Layers.clear();
        layer.eachLayer((layer: any) => {
            if (layer.feature && layer.feature.properties) {
                this._Layers.set(layer.feature.properties.slug, layer);
            }
        });
    }

    private _onClickMap(layer: L.Layer) {
        const that = this;
        layer.on({
            click: (evt) => {
                that._ngzone.run(() => {
                    const pais = this._localidadeService.getPaisBySigla(evt.target.feature.properties.sigla);
                    this._router.navigate(
                        this.link.concat(pais ? pais.slug : ''), 
                        { relativeTo: this._route }
                    )
                });
            }
        });
    }

    private _setOnEachFeatureListeners(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer, context: any) {
        context._onClickMap(layer);
    }
}


