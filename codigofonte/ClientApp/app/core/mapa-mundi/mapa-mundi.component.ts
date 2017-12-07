import { LocalidadeService } from '../../services/localidade/localidade.service';
import { Component, OnInit } from '@angular/core';

import * as G from 'geojson';
import * as L from 'leaflet';
import { RouterParamsService } from '../../services';
import { MalhaService } from '../../services/malha';

@Component({
    selector: 'mapa-mundi',
    templateUrl: './mapa-mundi.component.html',
    styleUrls: [
        './mapa-mundi.component.css'
    ]
})
export class MapaMundiComponent implements OnInit {
    public map: L.Map;
    public paisSelecionado: string;
    public paisBounds: L.LatLngBounds;
    public topology: any;
    public mapOptions = {
        center: [0, 0],
        zoom: 3,
        layers: [],
        maxZoom: 8,
        minZoom: 3
    };
    private _geojsonLayer: L.GeoJSON;

    constructor(
        private _routerParams: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _malhaService: MalhaService
    ) { }

    ngOnInit() {
        this._routerParams.params$.subscribe(o => {
            console.log('DENTRO', o)
            // if (params.pais) {
            //     this.paisSelecionado  = params.pais;
            //     this.setZoomOnPaisSelecionado();
            // }
        });
    }

    onMapReady(map: L.Map) {
        this.map = map;
        this.topology = this._malhaService.getMalhaGeoJSON();
        this.setZoomOnPaisSelecionado()
    }

    setZoomOnPaisSelecionado() {
        if (this.map) {
            this.map.eachLayer((layer: any) => {
                if (layer._leaflet_id === this.paisSelecionado) {
                    this.paisBounds = layer.getBounds();
                }
            });
        }
    }

    private _addGeoJSONLayer(geojson: G.GeoJsonObject) {
        const that = this;

        if (this.map && geojson) {
            this._geojsonLayer = new L.GeoJSON(geojson, {
                style: this._featureStyle,
                onEachFeature: this._setOnEachFeatureListeners.bind(that)
            });
            this._geojsonLayer.addTo(this.map);
            this._setCustomIDforEachLayer(this._geojsonLayer);
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
        const that = this;
        if (feature.properties.mostrar) {
            layer.on({
                click: this._onClickMap.bind(that)
            });
        }
    }

    private _featureStyle = function style(feature: any) {
        debugger;
        // if (feature.properties.mostrar) {
            return {
                fillColor: 'rgb(118, 118, 118)',
                weight: 2,
                opacity: 1,
                color: 'rgb(78,78,78)',
                fillOpacity: 1,
            };
        // } else {
        //     return {}
        // }
    };
}
