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
          const pais =
            feature && feature.properties
              ? this._localidadeService.getPaisBySigla(feature.properties
                  .sigla as string)
              : null;
          let idx = null;
          let valor = null;

          if (pais) {
            const sigla = pais.sigla;
            const obj = values.paises[sigla];
            valor = obj ? parseFloat(obj.valor) : null;
            if (valor) {
              idx = 0;
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
                fillColor: "rgb(95, 95, 95)"
              }
            );
          }

          return _feature;
        })
      }
    };

    return this._malha.geojson;
  }

  getRanking(indicadorId: number, period?: string) {
    return this._paisesService.getRanking(indicadorId, "one", period).pipe(
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
        
        let pos = 1;
        const values = ranking.res.reduce((agg: any, obj: any) => {
          const pais = this._localidadeService.getPaisBySigla(obj.localidade);

          if (!pais || !pais.onu) {
            return agg;
          }

          agg.ordem.push(obj.localidade);
          agg.paises[obj.localidade] = {
            pais,
            posicao: pos++,
            valor: this._specialValues.values[obj.res]
              ? this._specialValues.values[obj.res]
              : obj.res
          };
          return agg;
        }, initialState);

        const todosPaises = this._localidadeService.getAllPaises();

        todosPaises.forEach(pais => {
          if (!values.paises[pais.sigla] && pais.onu) {
            values.ordem.push(pais.sigla);
            values.paises[pais.sigla] = {
              pais,
              posicao: "-",
              valor: "-"
            };
          }
        });

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

    const nCategories = Math.min(
      Math.ceil(Math.sqrt(valores.length)),
      this.MAX_RANKING_DIVISIONS
    );
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
        return maxValue - intervalo * (idx + 1);
      });

    return { faixas, divisores };
  }

  setDivisions(n: number): string[] {
    // Cores retiradas de:
    // http://colorbrewer2.org/#type=sequential&scheme=Greens&n=3
    const RANGE_COLORS = [
      ["#00EB8D"],
      ["#00EB8D", "#4D6F82"],
      ["#B1F383", "#00EB8D", "#4D6F82"],
      ["#E0D7CE", "#B1F383", "#00EB8D", "#4D6F82"],
      ["#E0D7CE", "#B1F383", "#00EB8D", "#00D0A5", "#4D6F82"],
      ["#E0D7CE", "#B1F383", "#00EB8D", "#00D0A5", "#00B5BA", "#4D6F82"]
    ];

    const range = RANGE_COLORS[n - 1];

    if (!range) {
      debugger;
    }

    return range.slice(0).reverse();
  }
}
