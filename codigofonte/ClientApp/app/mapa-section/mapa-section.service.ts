import { Injectable, Inject } from "@angular/core";
import { PaisesService } from "../shared/paises-service/paises.service";
import { LocalidadeService } from "../shared/localidade/localidade.service";
import { MalhaService } from "../shared/malha/malha.service";

import { MAP_STYLES } from "./mapa.configurations";

import { Feature, FeatureCollection } from "geojson";
import { Pais } from "../shared";
import { map } from "rxjs/operators";
import { Ranking } from "../shared/paises-service/interfaces";

const RANGE_COLORS = {
  azuis: ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"],
  verdes: ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#31a354", "#006d2c"],
  vermelhos: ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#a50f15"]
};
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
          //@ts-ignore
          const pais = this._localidadeService.getPaisBySigla(feature.properties
            .sigla as string);
          let idx = null;
          let valor = null;

          if (pais) {
            const sigla = pais.sigla;
            const obj = values.paises[sigla];
            idx = 0;
            if (obj) {
              valor = parseFloat(obj.valor);
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
debugger
          if (idx !== null) {
            // @ts-ignore
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

    const nCategories = Math.min(Math.sqrt(valores.length), 15);
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
        return maxValue - intervalo * idx;
      });

    return { faixas, divisores };
  }

  setDivisions(n: number) {
    const { azuis, vermelhos, verdes } = RANGE_COLORS;

    switch (n) {
      case 2:
        n = 3;
        break;
      case 7:
        n = 8;
        break;
      case 11:
        n = 12;
        break;
      case 13:
        n = 15;
        break;
      case 14:
        n = 15;
        break;
    }

    switch (n) {
      case 3:
        return [azuis[1], azuis[2], azuis[3]];

      case 4:
        return [azuis[1], azuis[2], azuis[3], azuis[4]];

      case 5:
        return azuis;

      case 6:
        return [verdes[1], verdes[2], verdes[3], azuis[1], azuis[2], azuis[3]];

      case 8:
        return [
          verdes[1],
          verdes[2],
          verdes[3],
          verdes[4],
          azuis[1],
          azuis[2],
          azuis[3],
          azuis[4]
        ];

      case 9:
        return [
          verdes[1],
          verdes[2],
          verdes[3],
          azuis[1],
          azuis[2],
          azuis[3],
          vermelhos[1],
          vermelhos[2],
          vermelhos[3]
        ];

      case 10:
        return [
          verdes[0],
          verdes[1],
          verdes[2],
          verdes[3],
          verdes[4],
          azuis[0],
          azuis[1],
          azuis[2],
          azuis[3],
          azuis[4]
        ];

      case 12:
        return [
          verdes[1],
          verdes[2],
          verdes[3],
          verdes[4],
          azuis[1],
          azuis[2],
          azuis[3],
          azuis[4],
          vermelhos[1],
          vermelhos[2],
          vermelhos[3],
          vermelhos[4]
        ];

      case 15:
      default:
        return [
          verdes[0],
          verdes[1],
          verdes[2],
          verdes[3],
          verdes[4],
          azuis[0],
          azuis[1],
          azuis[2],
          azuis[3],
          azuis[4],
          vermelhos[0],
          vermelhos[1],
          vermelhos[2],
          vermelhos[3],
          vermelhos[4]
        ];
    }
  }
}
