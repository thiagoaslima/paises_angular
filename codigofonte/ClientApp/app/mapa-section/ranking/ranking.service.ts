import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map } from "rxjs/operators/map";
import { tap } from 'rxjs/operators/tap';

import { Localidade, LocalidadeService, PaisesService } from "../../shared";
import { MetadataIndicador } from "../../shared/paises-service/interfaces/MetadataIndicador";
import { RouterParamsService } from "../../shared/router-params.service";

const indicadorBlank = { nome: "", unidade: { identificador: "", classe: "", multiplicador: 1 } }
@Injectable()
export class RankingService {

    public valores$ = new BehaviorSubject([]);
    public indicador$ = new BehaviorSubject(indicadorBlank)

    constructor(
        private _paisesService: PaisesService,
        private _localidadeService: LocalidadeService,
    ) { }

    updateService(indicadorId?: number) {
        this.updateIndicador(indicadorId);
        this.updateValores(indicadorId);
    }
    updateIndicador(indicadorId?: number) {
        if (!indicadorId) {
            this.indicador$.next(indicadorBlank);
        } else {
            this._paisesService.getMetadataIndicador(indicadorId).pipe(
                map(([metadata]) => ({ nome: metadata.indicador, unidade: metadata.unidade }))
            ).subscribe(indicador => this.indicador$.next(indicador))
        }

    }

    updateValores(indicadorId?: number) {
        if (!indicadorId) {
            this.valores$.next([]);
        } else {

            this._paisesService.getRanking(indicadorId).pipe(
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
                        ...comValores.sort(this.sortPaises).map((obj, idx) => Object.assign(obj, { posicao: idx + 1 })),
                        ...semValores.sort(this.sortPaises)
                    ]);
                }),
                tap(_ => console.timeEnd("#getValores")),
            )
                .take(1)
                .subscribe(valores => this.valores$.next(Array.from(valores.values())));
        }
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