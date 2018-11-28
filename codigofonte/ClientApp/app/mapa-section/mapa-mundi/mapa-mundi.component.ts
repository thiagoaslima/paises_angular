import {
    Component,
    Input,
    ChangeDetectionStrategy,
    NgZone,
} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {
    Pais,
    LocalidadeService
} from '../../shared';

import * as L from "leaflet";
import { MAP_STYLES } from "../mapa.configurations";

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
    host: { 'class': 'bg-layer' }
})
export class MapaMundiComponent {
    @Input() link: string[] = [];
    @Input() dados: any = null;
    
    @Input() set pais(value: Pais) {
        const layerArray = value ? this._layers.get(value.sigla3) || [] : [];
        
        if (this._selecteds.length > 0) {
            this._selecteds.forEach(layer => this.unselectLayer(layer));
        }

        if (layerArray.length > 0 && this._map) {
            layerArray.forEach((layer: any) => {
                this.selectLayer(layer);
                this._selecteds.push(layer);
            })
        }

        this._pais = value || null;
    }

    @Input() set malha(malha: GeoJSON.GeoJsonObject) {

        const layer: L.LayerGroup = L.geoJSON(malha, {
            style: (feature) => this._featureStyle(this, feature),

            onEachFeature: (feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) => {
                this._setOnEachFeatureListeners(feature, layer, this);
            }
        });

        this.leafletLayers = [layer];
        this._registerLayers(layer.getLayers());
    }

    public mapOptions = MAP_STYLES.options;
    public leafletLayers: L.LayerGroup[] = [];

    private _selecteds: any[] = [];
    private _layers = new Map<string, L.Layer[]>();
    private _map: L.Map  | null= null;
    private _pais: Pais | null = null;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _ngzone: NgZone,
        private _localidadeService: LocalidadeService
    ) {}

    onMapReady(map: L.Map) {
        this._map = map;

        map.invalidateSize();
        map.setMaxBounds(L.latLngBounds(L.latLng(-50, -175), L.latLng(90, 179)));

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
    };

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
            click: (evt) => {
                that._ngzone.run(() => {
                    const pais = this._localidadeService.getPaisBySigla(evt.target.feature.properties.sigla);
                    
                    if (pais) { 
                        // @ts-ignore
                        this._map.fitBounds(layer.getBounds()); 
                        this._router.navigate(
                            this.link.concat(pais.slug), 
                            { relativeTo: this._route }
                        )
                    }
                });
            }
        });
    }

    private _popup(feature: any, layer: any, context: any) {
        const pais = context._localidadeService.getPaisBySigla(feature.properties.sigla);
        
        if (pais) {
            //debugger;
            const msg = pais.nome.pt + (feature.properties.nota ? ` (${feature.properties.nota.pt})` : "") + 
                (feature.properties.valor ? `<br /> <strong>${feature.properties.valor}</strong>` : "");
            layer.bindTooltip(msg);

            layer.on({
                mouseup: (evt: any) => {
                    layer.openTooltip();
                },
                mouseout: (evt: any) => {
                    layer.closeTooltip();
                },
            });
        }
    }

    private _setOnEachFeatureListeners(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer, context: any) {
        context._onClickMap(layer);
        context._popup(feature, layer, context);
    }
}


