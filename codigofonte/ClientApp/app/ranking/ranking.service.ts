import { Injectable } from "@angular/core";

import { map } from "rxjs/operators/map";
import { tap } from 'rxjs/operators/tap';

import { Localidade, LocalidadeService, PaisesService } from "../shared";

@Injectable()
export class RankingService {

    constructor(
        private _paisesService: PaisesService,
        private _localidadeService: LocalidadeService
    ) {}

    getNomeIndicador(indicadorId: number) {
        return this._paisesService.getIndicador(indicadorId)
            .pipe(map(([metadata]) => metadata.indicador.toUpperCase()));
    }

    getValores(indicadorId: number) {
        return this._paisesService.getRanking(indicadorId).pipe(
            tap(_ => console.time("#getValores")),
            map((valores: any) => {
                valores.sort((a: any, b: any) => a.valorMaisRecente > b.valorMaisRecente ? -1 : 1);

                return valores.reduce((agg: any[], valor: any, idx: number) => {
                    let nome = this.getNomePais(valor.localidade);

                    if (nome) {
                        agg.push({
                            posicao: valor.valorMaisRecente === '-' ? '-' : (idx + 1), 
                            nome: (<Localidade>this._localidadeService.getPaisBySigla(valor.localidade)).nome.pt, 
                            valor: valor.valorMaisRecente
                        });
                    }

                    return agg;
                }, [] as any[]);
            }),
            tap(_ => console.timeEnd("#getValores")),
        )
    }

    getNomePais(sigla: string) {
        let pais = this._localidadeService.getPaisBySigla(sigla);
        return pais ? pais.nome.pt : "";
    }
}