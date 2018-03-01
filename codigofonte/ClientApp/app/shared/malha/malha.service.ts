import { Injectable } from "@angular/core";
import { topojson } from './paises.topojson';

import * as T from 'topojson';
import { Localidade } from "../localidade/localidade.model";

@Injectable()
export class MalhaService {
    private geojson: any;
    private topojson = topojson;

    private polygonsStyles = {
        default: {
            fillColor: '#757575',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        hover: {
            fillColor: '#909090',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        selected: {
            fillColor: '#DDDDDD',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        uninteractive: {
            fillColor: '#505050',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
            className: 'no-interaction'
        },

        scale1: {
            fillColor: 'rgb(191,238,143)',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale2: {
            fillColor: 'rgb(66,230,149)',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale3: {
            fillColor: 'rgb(62,204,167)',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale4: {
            fillColor: 'rgb(59,178,184)',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale5: {
            fillColor: 'rgb(103,112,129)',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scaleNoData: {
            fillColor: 'rgb(222,215,207)',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        }
    }

    constructor() {
        this.geojson = T.feature(this.topojson, this.topojson.objects.countries);
    }

    public getMalhaTopoJSON() {
        return Object.assign({}, this.topojson);
    }

    public getMalhaGeoJSON() {
        return Object.assign({}, this.geojson);
    }

    public updateMalhaGeoJSON(valores: Array<{pais: Localidade, valor: string}>) {
        let geojson = this.getMalhaGeoJSON();

        const scales = this._makeScales(valores);
        const valoresMap = valores.reduce((agg, obj) => {
            agg[obj.pais.slug] = obj;
            return agg;
        }, {} as {[slug: string]: {pais: Localidade, valor: string}});

        geojson.features = geojson.features.map((feature: any) => {
            const { sigla, mostrar } = feature.properties;
            
            if (mostrar) { 
                let scale = this._getScale(valoresMap[sigla].valor, scales);
                //@ts-ignore
                feature.properties.style.default = this.polygonsStyles[scale];
            }
            
            return feature; 
        });
    }

    public resetMalha() {
        this.topojson.objects.countries.geometries.forEach((geometry: any) => {
            const { mostrar } = geometry.properties;

            geometry.properties.style = {
                default: mostrar ? this.polygonsStyles.default : this.polygonsStyles.uninteractive,
                selected: mostrar ? this.polygonsStyles.selected : this.polygonsStyles.uninteractive,
                hover: mostrar ? this.polygonsStyles.hover : this.polygonsStyles.uninteractive
            }
        });
    }

    private _makeScales(valores: Array<{pais: Localidade, valor: string}>) {
        const _setValues = new Set(valores.map(obj => obj.valor).sort().reverse());
        const _values = Array.from(_setValues.values()).filter(Boolean);
        let sep = [];

        let div = Math.floor(_values.length / 5);
        sep[0] = _values[div];
        sep[1] = _values[div * 2];
        sep[2] = _values[div * 3];
        sep[3] = _values[div * 4];

        return sep;
    }

    private _getScale(value: string, scales: string[]) {
        if (!value) {
            return 'scaleNoData';
        }

        let scale = 5;

        for (let idx = 0; idx < scales.length; idx++) {
            let currentScale = scales[idx];

            if (value >= currentScale) {
                scale = idx + 1;
                break;
            }
        }

        return 'scale' + scale;
    }

}
