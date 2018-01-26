import { Component, OnChanges, OnInit, SimpleChanges, PLATFORM_ID, Inject, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

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


@Component({
    selector: 'mapa-mundi',
    templateUrl: './mapa-mundi.component.html',
    styleUrls: [
        './mapa-mundi.component.css'
    ],
    host: {
        'class': 'bg-layer'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaMundiComponent {
    public isBrowser: boolean;
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
        this._setPaisLayerId(this._geojsonLayer);
        setTimeout(() => {
            this.selectPais(this.paisSelecionado.slug);
        }, 10);
    }

    private _geojsonLayer: L.GeoJSON | null = null;
    private _paisLayerId = {} as {[pais: string]: number}
    private _layerWithVisibleTooltip: L.Layer | null = null;
    private _subscriptions: {
        [key: string]: Subscription
    } =  Object.create(null);

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _params: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _malhaService: MalhaService,
        private _ngzone: NgZone,
        private _changeDetector: ChangeDetectorRef,
        platform: PlatformDetectionService

    ) {
        this.isBrowser = platform.isBrowser;
        this.topology = this._malhaService.getMalhaGeoJSON();
    }

    ngOnInit() {
        this._subscriptions.params = this._params.params$.subscribe(({ params, url }: any) => {
            if (params.pais) {
                this.selectPais(params.pais);
            } else {
                this.selectPais('');
                this.map && this.map.fitWorld({ maxZoom: 8 });
            }
            this._changeDetector.detectChanges();
        });
    }

    ngOnDestroy() {
        this._changeDetector.detach();
        Object.values(this._subscriptions).forEach(subscription => subscription.unsubscribe());
    }

    onMapReady(map: L.Map) {
        this.map = map;
        (<any>window).map = map;
        map.invalidateSize();

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
                    layer = this._geojsonLayer.getLayer(this._paisLayerId[this.paisSelecionado.slug]) || null;;
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
                let layer = this._geojsonLayer.getLayer(this._paisLayerId[this.paisSelecionado.slug]);
                this.paisSelecionado.layer = layer || null;

                this._selectLayer(layer);
                this.setZoomOnPaisSelecionado();
            } else {
                this.paisSelecionado.layer = null;
                this.paisSelecionado.bounds = null;
            }
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

    private _onHoverLayer(layer: any) {
        const that = this;
        layer.on({
            mouseover: () => layer.setStyle(MAP_STYLES.polygons.hover),
            mouseout: () => {
                that.paisSelecionado.layer == layer
                    ? layer.setStyle(MAP_STYLES.polygons.selected)
                    : layer.setStyle(MAP_STYLES.polygons.default)
            }
        });
    }

    private _onClickMap(layer: L.Layer) {
        const that = this;
        layer.on({
            click: (evt) => {
                this._router.navigate(['.', evt.target.feature.properties.slug], { relativeTo: that._route });
			}
        });
    }


    private _createAndShowTooltip(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer, latlng: L.LatLng) {
        const that = this;

        let tooltip = L.tooltip({
            sticky: true,
            interactive: false
        })
            .setLatLng(latlng)
            .setContent(feature.properties.nome.pt)

        layer.bindTooltip(tooltip);
        layer.openTooltip();

        let tryouts = 0;
        this._ngzone.runOutsideAngular(() =>
            requestAnimationFrame(() => {
                if (!layer.isTooltipOpen()) {
                    layer.unbindTooltip();
                    if (tryouts < 5) {
                        this._createAndShowTooltip(feature, layer, latlng);
                    }
                } else {
                    that._layerWithVisibleTooltip = layer;
                }
            })
        );
    }
    private _handleTooltip(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) {

        layer.on({
            mouseover: (evt: any) => {
                if (
                    this._layerWithVisibleTooltip &&
                    this._layerWithVisibleTooltip.isTooltipOpen()
                ) {
                    this._layerWithVisibleTooltip.closeTooltip();
                    this._layerWithVisibleTooltip = null;
                }

                let tooltip = layer.getTooltip();

                if (!tooltip) {
                    this._createAndShowTooltip(feature, layer, evt.latlng)
                } else {
                    layer.openTooltip();
                    this._layerWithVisibleTooltip = layer;
                }

            },
            mouseout: () => {
                layer.closeTooltip();
            }
        });
    }

    private _setOnEachFeatureListeners(feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) {
        if (feature.properties.mostrar) {
            this._handleTooltip(feature, layer);
            this._onClickMap(layer);
            this._onHoverLayer(layer);
        }
    }

    private _featureStyle(feature: any) {
        if (!feature.properties.mostrar) {
            return MAP_STYLES.polygons.uninteractive;
        }

        if (feature.properties.slug === this.paisSelecionado) {
            return MAP_STYLES.polygons.selected;
        }

        return MAP_STYLES.polygons.default;
    };


   private _setPaisLayerId(layerGroup: any) {
        layerGroup.getLayers().forEach((l: any) => {
            this._paisLayerId[l.feature.properties.slug] = l._leaflet_id   
        });
    }
}


