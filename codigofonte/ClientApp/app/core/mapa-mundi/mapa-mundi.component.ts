import { Component, OnInit } from '@angular/core';

import { topojson } from '../../metadados/paises.topojson';
import { RouterParamsService } from '../../services';

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
    public topology: any;
    public mapOptions = {
        center: [0, 0],
        zoom: 3,
        layers: [],
        maxZoom: 8,
        minZoom: 3
    };

    public mapStyle = function style(feature: any) {
        let style = {
            fillColor: 'rgb(118, 118, 118)',
            weight: 2,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
            className: 'teste'
        };
        if (!feature.properties.mostrar) {
            style.fillColor = 'red';
            style.className = 'no-interactive';
        }

        return style;
    };

    constructor(
        private _routerParams: RouterParamsService
    ) { }

    ngOnInit() {
        this._routerParams.params$.subscribe(({ params }) => {
            if (params.pais) {
                this.paisSelecionado = params.pais;
            }
        });
    }

    onMapReady(map: L.Map) {
        this.map = map;
        this.topology = topojson;
    }
}
