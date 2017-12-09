import { LocalidadeService } from '../../services/localidade/localidade.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import * as G from 'geojson';
import * as L from 'leaflet';
import { RouterParamsService } from '../../services';
import { MalhaService } from '../../services/malha';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
    selector: 'mapa-mundi',
    templateUrl: './mapa-mundi.component.html',
    styleUrls: [
        './mapa-mundi.component.css'
    ]
})
export class MapaMundiComponent {
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
    public get geojsonLayer(): L.GeoJSON | null {
        return this._geojsonLayer;
    }
    public set geojsonLayer(value: L.GeoJSON | null ) {
        this._geojsonLayer = value;
        this._setCustomIDforEachLayer(this._geojsonLayer);
        setTimeout(() => {
            this.setZoomOnPaisSelecionado()
        }, 10);
    }
    
    private _geojsonLayer: L.GeoJSON | null = null;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _params: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _malhaService: MalhaService
    ) { 
        this.topology = this._malhaService.getMalhaGeoJSON();

        this._params.params$.subscribe(({params}: any)  => {
            if (params.pais) {
                 this.paisSelecionado  = params.pais;
                 this.setZoomOnPaisSelecionado();
            }
        });
    }

    onMapReady(map: L.Map) {
        this.map = map;
        
        const that = this;
        this.geojsonLayer = new L.GeoJSON(this.topology, {
            style: this._featureStyle,
            onEachFeature: this._setOnEachFeatureListeners.bind(that)
        });
    }

    setZoomOnPaisSelecionado() {
        if (this.map && this.paisSelecionado) {
            this.map.eachLayer((layer: any) => {
                if (layer._leaflet_id === this.paisSelecionado) {
                    this.paisBounds = layer.getBounds();
                }
            });
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
            // l._path.id = l.feature.properties.slug;
            l._leaflet_id = l.feature.properties.slug;
            return Object.assign(agg, { [l.feature.properties.slug]: l });
        }, Object.create(null));
    }

    private _onClickMap(evt: L.LeafletEvent) {
        this._router.navigate(['.', evt.target.feature.properties.slug], {relativeTo: this._route});
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
