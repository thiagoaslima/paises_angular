// This directive extends the @asymmetrik/ngx-leaflet directive,
// as suggested in the plugin page

import { Directive, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';

import * as L from 'leaflet';
import * as T from 'topojson';

@Directive({
    selector: '[ibgeLeaflet]',
})
export class IBGELeafletDirective
    implements OnChanges, OnInit {

    leafletDirective: LeafletDirectiveWrapper;

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
    private _layer: L.GeoJSON;

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
        if (this.map && geojson) {
            this._layer = new L.GeoJSON(this.geojson, options);
            this._layer.addTo(this.map);
        }
        console.log(this._layer);
    }

    private _setStyle() {
        if (this.map && this._layer && this.styles) {
            this._layer.setStyle(this.styles);
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
