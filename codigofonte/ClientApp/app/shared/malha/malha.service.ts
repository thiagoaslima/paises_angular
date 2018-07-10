import { Injectable, Inject } from "@angular/core";
import { topojson } from './paises.topojson';

import * as T from 'topojson';
import { Pais } from "../localidade";
import { getNumberPrecision } from "../../../utils/getNumberPrecision";

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
            strokeColor: '#E6E6E6',
            weight: 6,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        uninteractive: {
            fillColor: '#606060',
            weight: 0,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1,
            className: 'no-interaction'
        },

        scale11: {
            fillColor: '#fee5d9',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale12: {
            fillColor: '#fcae91',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale13: {
            fillColor: '#fb6a4a',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale14: {
            fillColor: '#de2d26',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale15: {
            fillColor: '#a50f15',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },

        scale21: {
            fillColor: '#f2f0f7',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale22: {
            fillColor: '#cbc9e2',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale23: {
            fillColor: '#9e9ac8',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale24: {
            fillColor: '#756bb1',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale25: {
            fillColor: '#54278f',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },

        scale31: {
            fillColor: '#eff3ff',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale32: {
            fillColor: '#bdd7e7',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale33: {
            fillColor: '#6baed6',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale34: {
            fillColor: '#3182bd',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
        },
        scale35: {
            fillColor: '#08519c',
            weight: 1,
            opacity: 1,
            color: 'rgb(78,78,78)',
            fillOpacity: 1
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
    };

    constructor(
        @Inject('SPECIAL_VALUES') private _specialValues: { cases: { [key: string]: string }, values: { [key: string]: string } }
    ) {
        this._setMalhaProperties();
        this.geojson = T.feature(this.topojson, this.topojson.objects.countries);
    }

    public getMalhaTopoJSON() {
        return this.topojson;
    }

    public getMalhaGeoJSON(valores?: Array<{ pais: Pais, valor: string }>, scale?: number[]): any {
        if (!valores || valores.length === 0) {
            return this.geojson;
        }

        if (valores && scale) {
            return this.updateMalhaGeoJSON(valores, scale);
        } else {
            throw new Error('No scale parameter set');
        }
    }

    public updateMalhaGeoJSON(valores: Array<{ pais: Pais, valor: string }>, scales: number[]) {
        let geojson = Object.assign({}, this.geojson);

        const valoresMap = valores.reduce((agg, obj) => {
            agg[obj.pais.sigla] = obj;
            return agg;
        }, {} as { [sigla: string]: { pais: Pais, valor: string } });

        geojson.features = geojson.features.map((feature: any) => {
            feature = JSON.parse(JSON.stringify(feature));

            const { sigla, mostrar } = feature.properties;

            if (mostrar) {
                let scale = this._getScale(parseFloat(valoresMap[sigla].valor), scales);

                if (scale) {
                    //@ts-ignore
                    feature.properties.style.default = this.polygonsStyles[scale];
                }
            }

            return feature;
        });

        return geojson;
    }


    private _setMalhaProperties() {
        this.topojson.objects.countries.geometries.forEach((geometry: any) => {
            const { mostrar } = geometry.properties;

            geometry.properties.style = {
                default: mostrar ? this.polygonsStyles.default : this.polygonsStyles.uninteractive,
                selected: mostrar ? this.polygonsStyles.selected : this.polygonsStyles.uninteractive,
                hover: mostrar ? this.polygonsStyles.hover : this.polygonsStyles.uninteractive
            }
        });
    }

    public makeScales(valores: Array<{ pais: Pais, valor: string }>) {
        const valoresNumericos = valores
            .filter(obj => !this._specialValues.cases[obj.valor])
            .map(obj => parseFloat(obj.valor));

        const _setValues = new Set(valoresNumericos);
        const _values = Array.from(_setValues.values()).sort((a, b) => a - b);
        const { quantidade, range, precision } = this._buildClassesDeValores(_values);

        const classes = [];

        for (let idx = 0; idx <= quantidade; idx++) {
            let valor = _values[0] + (range * idx);
            classes.push(parseFloat(valor.toPrecision(precision)));
        }

        return classes;
    }

    public getScaleClasses(scales: number[]) {
        let len = (scales.length - 1) / 3;

        let grupos: string[] = [];
        for (let idx = 0; idx < len; idx++) {
            grupos.push('1' + (idx + 1), '2' + (idx + 1), '3' + (idx + 1));
        }

        return grupos;
    }

    private _buildClassesDeValores(valores: Array<number>) {
        const precision = Math.max(...valores.map(getNumberPrecision));
        const qtdeClasses = this._getQuantidadeDeClasses(valores);
        let rangeClasse = (valores[valores.length - 1] - valores[0]) / qtdeClasses;
        rangeClasse = parseFloat(rangeClasse.toPrecision(precision));

        return {
            quantidade: qtdeClasses,
            range: rangeClasse,
            precision
        };
    }

    private _getQuantidadeDeClasses(_values: number[]) {
        let qtdeClasses = Math.ceil(Math.sqrt(_values.length));
        while (qtdeClasses % 3 !== 0) {
            qtdeClasses++;
        }
        return qtdeClasses;
    }

    private _getScale(value: number, classes: number[]) {
        if (!value) {
            return 'scaleNoData';
        }

       const grupos = this.getScaleClasses(classes);

        let scale = classes.length;
        let idx;

        for (idx = 0; idx < classes.length; idx++) {
            if (value <= classes[idx]) {
                break;
            }
        }

        return 'scale' + grupos[idx];
    }

}
