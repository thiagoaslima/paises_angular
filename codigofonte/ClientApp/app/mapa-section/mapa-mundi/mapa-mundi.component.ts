import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as G from 'geojson';
import * as L from 'leaflet';

import { MAP_STYLES } from './mapa.configurations';
import { 
    LocalidadeService, 
    MalhaService, 
    Pais,
    RouterParamsService
} from '../../shared';

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
export class MapaMundiComponent {
    public map: L.Map;
    public mapOptions = MAP_STYLES.options;

    public paisSelecionado = {
        slug: '', 
        layer: <L.Layer | null>null, 
        bounds: <L.LatLngBounds | null>null
    };
    
    public topology: any;
    public get geojsonLayer(): L.GeoJSON | null {
        return this._geojsonLayer;
    }
    public set geojsonLayer(value: L.GeoJSON | null) {
        this._geojsonLayer = value;
        this._setCustomIDforEachLayer(this._geojsonLayer);
        setTimeout(() => {
            this.selectPais(this.paisSelecionado.slug);
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
    }
    
    ngOnInit() {
        this._params.params$.subscribe(({ params, url }: any) => {
            if (params.pais) {
                this.selectPais(params.pais);
            } else {
                this.selectPais('');
                this.map && this.map.fitWorld({ maxZoom: 8 });
            }
        });

    }

    onMapReady(map: L.Map) {
        this.map = map;
        (<any>window).map = map;

        map.fitWorld({ maxZoom: 8 });
        map.setMaxBounds(new L.LatLngBounds(new L.LatLng(-60, -179), new L.LatLng(90, 179)));

        const that = this;
        this.geojsonLayer = new L.GeoJSON(this.topology, {
            style: this._featureStyle.bind(that),
            onEachFeature: this._setOnEachFeatureListeners.bind(that)
        });
    }

    setZoomOnPaisSelecionado() {
        if (this.map && this._geojsonLayer && this.paisSelecionado.slug) {
            let layer = this.paisSelecionado.layer;

            if (!layer) {
                let pais = this._localidadeService.getPaisBySlug(this.paisSelecionado.slug);
                if (pais) {
                    layer = this._geojsonLayer.getLayer(parseInt(pais.codigo, 10)) || null;;
                } 
            }
            
            if (layer) {
                this.paisSelecionado.bounds = (<any>layer).getBounds();
            }
        }
    }

    public selectPais(slug: string) {
        this._unselectLayer(this.paisSelecionado.layer);
        this.paisSelecionado.slug = slug;

        if (this._geojsonLayer) {
            let pais = this._localidadeService.getPaisBySlug(slug);

            if (pais) {
                let layer = this._geojsonLayer.getLayer(parseInt(pais.codigo, 10));
                this.paisSelecionado.layer = layer || null;

                this._selectLayer(layer);
                this.setZoomOnPaisSelecionado();
            }
        } else {
            this.paisSelecionado.layer = null;
            this.paisSelecionado.bounds = null;
        }
    }

    private _selectLayer(layer: any) {
        if (layer) {
            layer.setStyle(MAP_STYLES.polygons.selected);
        }
    }
    private _unselectLayer(layer: any) {
        if (layer) {
            layer.setStyle(MAP_STYLES.polygons.default);
        }
    }

    private _onClickMap(layer: L.Layer) {
        const that = this;
        layer.on({
            click: (evt) => this._router.navigate(['.', evt.target.feature.properties.slug], { relativeTo: that._route })
        });
    }

    private _handleTooltip(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) {
        layer.bindTooltip(feature.properties.nome.pt, {
            offset: L.point(0, -20)
        });
        layer.on({
            mouseover: () => layer.openTooltip(),
            mouseout: () => layer.closeTooltip()
        });
    }

    private _setOnEachFeatureListeners(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) {
        if (feature.properties.mostrar) {
            this._handleTooltip(feature, layer);
            this._onClickMap(layer)
        }
    }

    private _featureStyle(feature: any) {
        if (feature.properties.slug === this.paisSelecionado) {
            return MAP_STYLES.polygons.selected;
        }
        return MAP_STYLES.polygons.default;
    };


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
            l._leaflet_id = parseInt(l.feature.properties.codigo, 10) || l._leaflet_id * -1;
            return Object.assign(agg, { [l._leaflet_id]: l });
        }, Object.create(null));
    }
}


