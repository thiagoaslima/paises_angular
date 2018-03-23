import { Injectable, Inject } from "@angular/core";
import { RouterParamsService } from "../shared/router-params.service";
import { PaisesService } from "../shared/paises-service/paises.service";
import { LocalidadeService } from "../shared/localidade/localidade.service";
import { MalhaService } from "../shared/malha/malha.service";
import { Ranking } from "../shared/paises-service/interfaces/Ranking";

import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";

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

    getMapa(indicadorId: number) {
        if (indicadorId) {
            return this.getRanking(indicadorId).pipe(
                map(ranking => this._malhaService.getMalhaGeoJSON(ranking))
            );
        }
        return Observable.of(this._malhaService.getMalhaGeoJSON());
    }


    getRanking(indicadorId: number) {
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

                    lista.comDados.sort((a, b) => a.posicao !== b.posicao ? a.posicao - b.posicao : a.pais.slug > b.pais.slug ? 1 : -1);
                    lista.semDados.sort((a, b) => a.pais.slug > b.pais.slug ? 1 : -1)


                return [].concat(...lista.comDados, ...lista.semDados);
            })
        )
    }
}


