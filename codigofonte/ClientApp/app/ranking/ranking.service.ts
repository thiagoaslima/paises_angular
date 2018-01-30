import { Injectable } from "@angular/core";
import { PaisesService } from "../shared/paises.service";
import { map } from "rxjs/operators/map";
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class RankingService {

    constructor(
        protected _paisesService: PaisesService
    ) {}

    getValores(indicadorId: number) {
        return this._paisesService.getRanking(indicadorId).pipe(
            tap(_ => console.time("#getValores")),
            map((valores: any) => {
                valores = valores.map((valor: any) => ({localidade: valor.localidade, valor: valor.valorMaisRecente}))
                valores.sort((a: any, b: any) => a.valor > b.valor ? -1 : 1);
                console.log(valores);
                return valores;
            }),
            tap(_ => console.timeEnd("#getValores")),
        )
    }
}