// This directive extends the @asymmetrik/ngx-leaflet directive,
// as suggested in the plugin page

import { Directive, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';

import * as L from 'leaflet';
import * as T from 'topojson';

@Directive({
    selector: '[ibgeLeaflet]',
})
export class PaisesLeafletDirective
    implements OnChanges, OnInit {

    private leafletDirective: LeafletDirectiveWrapper;

    // Hexbin data binding
    @Input('topology')
    set geojson(json: any) {
        this._geojson = this._topoJSON(json);
    }
    get geojson() {
        return this._geojson;
    }

    @Input('styles') styles: any;

    public map: L.Map;
    private _geojson = <any>[];
    private _geojsonLayer: L.GeoJSON;

    constructor(leafletDirective: LeafletDirective) {
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }

    ngOnInit() {
        this.leafletDirective.init();

        if (!this.map) {
            this.map = this.leafletDirective.getMap();
            this._addGeoJSONLayer(this.geojson);
            this._setStyle();
        }
    }

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (changes['map']) {
            this.map = changes['map'].currentValue;
        }

        if (changes['geojson']) {
            this._addGeoJSONLayer(this.geojson);
        }

        if (changes['styles']) {
            this._setStyle();
        }
    }

    private _addGeoJSONLayer(geojson: any, options = {}) {
        const _that = this;

        const _default = {
            onEachFeature: this._setOnEachFeatureListeners.bind(_that)
        };

        if (this.map && geojson) {
            this._geojsonLayer = new L.GeoJSON(this.geojson, Object.assign({}, options, _default));
            this._geojsonLayer.addTo(this.map);
            this._setCustomIDforEachLayer(this._geojsonLayer);
        }
    }

    private _setStyle() {
        if (this.map && this._geojsonLayer && this.styles) {
            this._geojsonLayer.setStyle(this.styles);
        }
    }

    /**
     * serve para passar um id próprio para cada layer criado 
     * a partir do GeoJSON, facilitando o acesso a layers específicos
     * através do método getLayer(id)
     *
     * TODO:
     * Refatorar o método, pois ele acessa propriedades privadas
     * diretamente.
     */
    private _setCustomIDforEachLayer(layerGroup: any) {
        layerGroup._layers = layerGroup.getLayers().reduce((agg: any, l: any) => {
            l._path.id = l.feature.properties.slug;
            l._leaflet_id = l.feature.properties.slug;
            return Object.assign(agg, { [l.feature.properties.slug]: l });
        }, Object.create(null));
    }

    private _onClickMap(evt: L.LeafletEvent) {
        this.map.fitBounds(evt.target.getBounds());
    }

    private _setOnEachFeatureListeners(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) {
        const _that = this;
        if (feature.properties.mostrar) {
            layer.on({
                click: this._onClickMap.bind(_that)
            });
        }
    }

    private _topoJSON(data = <any>[]): any[] {
        if (data.type === 'Topology') {
            for (let key in data.objects) {
                if (data.objects.hasOwnProperty(key)) {
                    data = T.feature(data, data.objects[key]);
                }
            }
        }

        return data;
    }

}
