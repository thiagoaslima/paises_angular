import { Injectable, Inject } from "@angular/core";
import { PaisesService } from "../shared/paises-service/paises.service";
import { LocalidadeService } from "../shared/localidade/localidade.service";
import { MalhaService } from "../shared/malha/malha.service";

import { MAP_STYLES } from "./mapa.configurations";

import { Feature, FeatureCollection } from "geojson";
import { Pais } from "../shared";
import { map } from "rxjs/operators";
import { Ranking } from "../shared/paises-service/interfaces";


@Injectable()
export class MapaSectionService {
  private _malha: {
    original: boolean;
    modified: boolean;
    geojson: FeatureCollection<any, any>;
  } | null = null;

  constructor(
    private _localidadeService: LocalidadeService,
    private _malhaService: MalhaService,
    private _paisesService: PaisesService,
    @Inject("SPECIAL_VALUES")
    private _specialValues: { values: { [key: string]: string } }
  ) {}

  getIndicador(indicadorId: number) {
    return this._paisesService.getMetadataIndicador(indicadorId, "one");
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
                style: MAP_STYLES.polygons.default
              }),
              geometry: {
                type: feature.geometry.type,
                coordinates: [...feature.geometry.coordinates]
              }
            };

            return _feature;
          })
        }
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
          const pais = feature && feature.properties 
            ? this._localidadeService.getPaisBySigla(feature.properties.sigla as string) 
            : null;
          let idx = null;
          let valor = null;

          if (pais) {
            const sigla = pais.sigla;
            const obj = values.paises[sigla];
            valor = obj ? parseFloat(obj.valor) : null;
            if (valor) {
              idx = 0;
              debugger;
              while (values.divisores[idx] && valor < values.divisores[idx]) {
                idx++;
              }
            }
          }
          const _feature = {
            type: feature.type,
            properties: Object.assign({}, feature.properties, {
              style: MAP_STYLES.polygons.default
            }),
            geometry: {
              type: feature.geometry.type,
              coordinates: [...feature.geometry.coordinates]
            }
          };
        
          if (idx !== null) {
            _feature.properties.style = Object.assign(
              {},
              _feature.properties.style,
              {
                fillColor: values.faixas[idx]
              }
            );

            _feature.properties = Object.assign({}, _feature.properties, {
              valor: valor
            });
          } else {
             _feature.properties.style = Object.assign(
              {},
              _feature.properties.style,
              {
                fillColor: 'rgb(95, 95, 95)'
              }
            );
          }

          return _feature;
        })
      }
    };

    return this._malha.geojson;
  }

  getRanking(indicadorId: number) {
    return this._paisesService.getRanking(indicadorId).pipe(
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
              posicao: number | "-";
              valor: string;
            };
          }
        };

        const values = ranking.res.reduce((agg, obj) => {
          agg.ordem.push(obj.localidade);
          agg.paises[obj.localidade] = {
            pais: this._localidadeService.getPaisBySigla(obj.localidade),
            posicao: obj.ranking,
            valor: this._specialValues.values[obj.res]
              ? this._specialValues.values[obj.res]
              : obj.res
          };
          return agg;
        }, initialState);

        return {
          ...values,
          faixas,
          divisores
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

    const nCategories = Math.min(Math.sqrt(valores.length), 7);
    const faixas = this.setDivisions(nCategories);

    const maxValue = valores[0] > 0 ? valores[0] * 1.1 : valores[0] * 0.95;

    const minValue =
      valores[valores.length - 1] > 0
        ? valores[valores.length - 1] * 0.95
        : valores[valores.length - 1] * 1.1;

    const intervalo = (maxValue - minValue) / faixas.length;
    const divisores = Array(faixas.length)
      .fill(1)
      .map((_, idx) => {
        return maxValue - intervalo * (idx+1);
      });

    return { faixas, divisores };
  }

  setDivisions(n: number): string[] {
    // Cores retiradas de:
    // http://colorbrewer2.org/#type=sequential&scheme=Greens&n=3
    const RANGE_COLORS = [
      ['#31a354'],
      ['#a1d99b', '#31a354'],
      ['#e5f5e0', '#a1d99b', '#31a354'],
      ["#edf8e9", "#bae4b3", "#74c476", "#238b45"],
      ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"],
      ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#31a354", "#006d2c"],
      ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"],
      ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"],
      ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"]
    ];

    return RANGE_COLORS[n-1].slice(0).reverse();
  }
}
