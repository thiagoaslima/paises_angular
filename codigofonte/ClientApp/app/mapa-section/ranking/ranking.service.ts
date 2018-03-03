import { Injectable } from "@angular/core";

import { map } from "rxjs/operators/map";
import { tap } from 'rxjs/operators/tap';

import { Localidade, LocalidadeService, PaisesService } from "../../shared";

@Injectable()
export class RankingService {

    constructor(
        private _paisesService: PaisesService,
        private _localidadeService: LocalidadeService
    ) { }

    getIndicador(indicadorId: number) {
        return this._paisesService.getMetadataIndicador(indicadorId)
            .pipe(map(([metadata]) => ({ nome: metadata.indicador, unidade: metadata.unidade })));
    }

    getValores(indicadorId: number) {
        return this._paisesService.getRanking(indicadorId).pipe(
            tap(_ => console.time("#getValores")),
            map((resposta: any) => {
                let comValores = [] as any[];
                let semValores = [] as any[];
                resposta.forEach((resultado: any, idx: number) => {
                    let pais = this.getPais(resultado.localidade);

                    if (pais) {

                        if (this.isValidValue(resultado.valorMaisRecente)) {
                            comValores.push({
                                posicao: 0,
                                pais: pais,
                                valor: resultado.valorMaisRecente
                            });
                        } else {
                            semValores.push({
                                posicao: '-',
                                pais: pais,
                                valor: ""
                            });
                        }
                    }

                });

                return new Set([
                    ...comValores.sort(this.sortPaises).map((obj, idx) => Object.assign(obj, {posicao: idx + 1})), 
                    ...semValores.sort(this.sortPaises)
                ]);
            }),
            tap(_ => console.timeEnd("#getValores")),
        )
    }

    getPais(sigla: string) {
        return this._localidadeService.getPaisBySigla(sigla);
    }

    sortPaises(paisA: any, paisB: any) {
        if (paisA.valor > paisB.valor) {
            return -1;
        }

        if (paisA.valor < paisB.valor) {
            return 1;
        }

        if (paisA.valor === paisB.valor) {
            return paisA.pais.slug > paisB.pais.slug ? 1 : -1
        }

        return 0;
    }

    isValidValue(valor: string) {
        return Boolean(valor) && !PaisesService.isSpecialValue(valor);
    }
}