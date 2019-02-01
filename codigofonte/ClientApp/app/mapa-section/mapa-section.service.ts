import { Injectable, Inject } from '@angular/core';
import { PaisesService } from '../shared/paises-service/paises.service';
import { LocalidadeService } from '../shared/localidade/localidade.service';
import { MalhaService } from '../shared/malha/malha.service';

import { MAP_STYLES } from './mapa.configurations';

import { Feature, FeatureCollection } from 'geojson';
import { Pais } from '../shared';
import { map } from 'rxjs/operators';
import { Ranking } from '../shared/paises-service/interfaces';

@Injectable()
export class MapaSectionService {
    private MAX_RANKING_DIVISIONS = 6;

    private _malha: {
        original: boolean;
        modified: boolean;
        geojson: FeatureCollection<any, any>;
    } | null = null;

    constructor(
        private _localidadeService: LocalidadeService,
        private _malhaService: MalhaService,
        private _paisesService: PaisesService,
        @Inject('SPECIAL_VALUES')
        private _specialValues: { values: { [key: string]: string } }
    ) {}

    getIndicador(indicadorId: number) {
        return this._paisesService.getMetadataIndicador(indicadorId, 'one');
    }

    getMapa() {
        if (!this._malha || !this._malha.original) {
            const malha = this._malhaService.getMalhaGeoJSON();

            this._malha = {
                original: true,
                modified: false,
                geojson: {
                    type: malha.type,
                    features: malha.features.map((feature: Feature<any>) => {
                        const _feature = {
                            type: feature.type,
                            properties: Object.assign({}, feature.properties, {
                                style: MAP_STYLES.polygons.default,
                            }),
                            geometry: {
                                type: feature.geometry.type,
                                coordinates: [...feature.geometry.coordinates],
                            },
                        };

                        return _feature;
                    }),
                },
            };
        }

        return this._malha.geojson;
    }

    getMapaRanking(values: any) {
        const malha = this._malhaService.getMalhaGeoJSON();

        this._malha = {
            original: false,
            modified: true,
            geojson: {
                type: malha.type,
                features: malha.features.map((feature: Feature<any>) => {
                    const pais =
                        feature && feature.properties
                            ? this._localidadeService.getPaisBySigla(feature
                                  .properties.sigla as string)
                            : null;
                    let idx = null;
                    let valor = null;

                    if (pais) {
                        const sigla = pais.sigla;
                        const obj = values.paises[sigla];
                        valor = obj ? parseFloat(obj.valor) : null;
                        if (valor) {
                            idx = 0;
                            while (
                                values.divisores[idx] &&
                                valor < values.divisores[idx]
                            ) {
                                idx++;
                            }
                        }
                    }
                    const _feature = {
                        type: feature.type,
                        properties: Object.assign({}, feature.properties, {
                            style: MAP_STYLES.polygons.default,
                        }),
                        geometry: {
                            type: feature.geometry.type,
                            coordinates: [...feature.geometry.coordinates],
                        },
                    };

                    if (idx !== null) {
                        _feature.properties.style = Object.assign(
                            {},
                            _feature.properties.style,
                            {
                                fillColor: values.faixas[idx],
                            }
                        );

                        _feature.properties = Object.assign(
                            {},
                            _feature.properties,
                            {
                                valor: valor,
                            }
                        );
                    } else {
                        _feature.properties.style = Object.assign(
                            {},
                            _feature.properties.style,
                            {
                                fillColor: 'rgb(95, 95, 95)',
                            }
                        );
                    }

                    return _feature;
                }),
            },
        };

        return this._malha.geojson;
    }

    getRanking(indicadorId: number, period?: string) {
        return this._paisesService.getRanking(indicadorId, 'one', period).pipe(
            map(ranking => {
                const { faixas, divisores } = this.calculateRanges(ranking);
                return { ranking, faixas, divisores };
            }),
            map(({ ranking, faixas, divisores }) => {
                const initialState = {
                    ordem: [] as string[],
                    paises: {} as {
                        [sigla: string]: {
                            pais: Pais | null;
                            posicao: number | '-';
                            valor: string;
                        };
                    },
                };

                let pos = 0;
                let idxComp = 0;
                let n = 0;
                let lastPosicao: number;
                const values = ranking.res.reduce(
                    (agg: any, obj: any, idx: number) => {
                        const pais = this._localidadeService.getPaisBySigla(
                            obj.localidade
                        );

                        if (!pais || !pais.onu) {
                            return agg;
                        }

                        let posicao: number;
                        if (idx === 0) {
                            posicao = ++pos;
                        } else if (ranking.res[idxComp].res === obj.res) {
                            posicao = pos;
                            n++;
                            idxComp = idx;
                        } else {
                            posicao = ++pos + n;
                            n = 0;
                            idxComp = idx;
                        }

                        lastPosicao = posicao;

                        agg.ordem.push(obj.localidade);
                        agg.paises[obj.localidade] = {
                            pais,
                            posicao,
                            valor: this._specialValues.values[obj.res]
                                ? this._specialValues.values[obj.res]
                                : obj.res,
                        };

                        return agg;
                    },
                    initialState
                );

                const todosPaises = this._localidadeService.getAllPaises();

                todosPaises.forEach(pais => {
                    if (!values.paises[pais.sigla] && pais.onu) {
                        values.ordem.push(pais.sigla);
                        values.paises[pais.sigla] = {
                            pais,
                            posicao: '-',
                            valor: '-',
                        };
                    }
                });

                return {
                    ...values,
                    faixas,
                    divisores,
                };
            })
        );
    }

    calculateRanges(results: Ranking) {
        const set = new Set(
            results.res
                .filter(obj => !Boolean(this._specialValues.values[obj.res]))
                .map(obj => parseFloat(obj.res))
        );
        const valores = Array.from(set);

        const nCategories = Math.min(
            Math.ceil(Math.sqrt(valores.length)),
            this.MAX_RANKING_DIVISIONS
        );

        const faixas = this.setDivisions(nCategories);
        const divisores = this.calcularDivisores([], valores, faixas.length);

        return { faixas, divisores };
    }

    calcularDivisores(
        marcadores: number[] = [],
        valores: number[],
        divisoes: number
    ): number[] {
        const maxValue = valores[0] > 0 ? valores[0] * 1.1 : valores[0] * 0.95;
        const minValue =
            valores[valores.length - 1] > 0
                ? valores[valores.length - 1] * 0.95
                : valores[valores.length - 1] * 1.1;

        const intervalo = (maxValue - minValue) / divisoes;
        const divisores = Array(divisoes)
            .fill(1)
            .map((_, idx) => {
                return maxValue - intervalo * (idx + 1);
            });

        let i = 0;
        let j = 0;
        for (i = 0; i < divisores.length; i++) {
            const high = i > 0 ? divisores[i - 1] : Infinity;
            const low = divisores[i];

            let hasItemInRange = false;

            // Como os valores ja estao ordenados, podemos iterar pelo array
            // e interrom,per quando achamos um valor da próxima faixa.
            // Ao tentarmos validar a próxima faixa, continuamos do valor onde paramos;
            // não é necessário reiniciar o array
            for (j; j < valores.length; j++) {
                if (valores[j] >= low && valores[j] <= high) {
                    hasItemInRange = true;
                }
                if (valores[j] < low) {
                    break;
                }
            }

            if (hasItemInRange) {
                marcadores.push(divisores[i]);
                divisoes--;
            } else {
                return this.calcularDivisores(
                    marcadores,
                    valores.slice(j),
                    divisoes
                );
            }
        }

        return marcadores;
    }

    setDivisions(n: number): string[] {
        // Sugestão de cores retiradas de:
        // http://colorbrewer2.org/#type=sequential&scheme=Greens&n=3

        // const RANGE_COLORS = [
        // ['#00EB8D'],
        // ['#00EB8D', '#4D6F82'],
        // ['#B1F383', '#00EB8D', '#4D6F82'],
        // ['#E0D7CE', '#B1F383', '#00EB8D', '#4D6F82'],
        // ['#E0D7CE', '#B1F383', '#00EB8D', '#00D0A5', '#4D6F82'],
        // ['#E0D7CE', '#B1F383', '#00EB8D', '#00D0A5', '#00B5BA', '#4D6F82'],
        // ];

        const RANGE_COLORS = [
            '#7d8092',
            '#257e93',
            '#33b8c2',
            '#06aa70',
            '#cadb7c',
            '#c6a595',
        ];

        // const range = n ? RANGE_COLORS[n - 1] : RANGE_COLORS[0];

        return RANGE_COLORS.slice(0, n);
    }
}
