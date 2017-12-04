import { Component } from '@angular/core';

import { topojson } from '../../metadados/paises.topojson';

@Component({
    selector: 'mapa-mundi',
    templateUrl: './mapa-mundi.component.html',
    styleUrls: [
        './mapa-mundi.component.css'
    ]
})
export class MapaMundiComponent {
    public map: L.Map;
    public topology: any;

    public mapStyle = function style(feature: any) {
        let style =  {
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

    onMapReady(map: L.Map) {
        this.map = map;
        this.topology = topojson;
    }
}
