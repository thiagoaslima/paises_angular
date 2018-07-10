import { Injectable, Inject } from "@angular/core";
import { RouterParamsService } from "../shared/router-params.service";
import { PaisesService } from "../shared/paises-service/paises.service";
import { LocalidadeService } from "../shared/localidade/localidade.service";
import { MalhaService } from "../shared/malha/malha.service";
import { Ranking } from "../shared/paises-service/interfaces/Ranking";

import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
import { Pais } from "../shared/index";

@Injectable()
export class MapaSectionService {

    constructor(
        private _localidadeService: LocalidadeService,
        private _malhaService: MalhaService,
        private _paisesService: PaisesService,
        @Inject('SPECIAL_VALUES') private _specialValues: { values: { [key: string]: string } }
    ) {

    }

    getIndicador(indicadorId: number) {
        return this._paisesService.getMetadataIndicador(indicadorId, 'one');
    }


    getMapa(ranking?: Array<{ pais: Pais, valor: string }>, scale?: number[]) {
        if (ranking) {
            return this._malhaService.getMalhaGeoJSON(ranking, scale);
        }
        return this._malhaService.getMalhaGeoJSON();
    }

    getScale(ranking: Array<{ pais: Pais, valor: string }>) {
        const values = this._malhaService.makeScales(ranking);
        return {
            classes: this._malhaService.getScaleClasses(values),
            values
        };
    }

    getRanking(indicadorId: number): Observable<{ pais: Pais, posicao: string, valor: string }[]> {
        return this._paisesService.getRanking(indicadorId).pipe(
            map((ranking: Ranking) => {
                const map = ranking.res.reduce((agg, obj) => {
                    agg[obj.localidade] = obj;
                    return agg;
                }, {} as { [key: string]: any });

                const lista = this._localidadeService.getAllPaises()
                    .reduce((agg, pais) => {
                        const obj = map[pais.sigla];

                        if (obj) {
                            agg.comDados.push({
                                pais,
                                posicao: obj.ranking,
                                valor: obj.res
                            })
                        } else {
                            agg.semDados.push({
                                pais,
                                posicao: '-',
                                valor: this._specialValues.values.NAO_DISPONIVEL
                            })
                        }

                        return agg;

                    }, { comDados: [] as any[], semDados: [] as any[] })

                lista.comDados = lista.comDados
                    .sort((a, b) => a.posicao !== b.posicao ? a.posicao - b.posicao : (a.pais.slug > b.pais.slug) ? 1 : -1)
                    .reduce(this._corrigePosicao, { lastPosicao: "0", currentPosicao: 0, naMesmaPosicao: 1, lista: [] })
                    .lista;

                lista.semDados.sort((a, b) => a.pais.slug > b.pais.slug ? 1 : -1)


                return [].concat(...lista.comDados, ...lista.semDados);
            })
        )
    }

    /*
     * Corrige o valor da propriedade posição, 
     * para levar em conta apenas os países membros da ONU 
     * e não todos os países cadastrados na base
    */
    _corrigePosicao(
        agg: { lastPosicao: string, currentPosicao: number, naMesmaPosicao: number, lista: Array<{ pais: Pais, posicao: string, valor: string }> },
        obj: { pais: Pais, posicao: string, valor: string }
    ) {
        if (obj.posicao === agg.lastPosicao) {          
            agg.naMesmaPosicao += 1;
            obj.posicao = agg.currentPosicao.toString(10);
        } else {
            agg.lastPosicao = obj.posicao;
            agg.currentPosicao = agg.currentPosicao + agg.naMesmaPosicao;
            agg.naMesmaPosicao = 1;
            obj.posicao = agg.currentPosicao.toString(10);
        }
        agg.lista.push(obj);
        return agg;
    }
}


