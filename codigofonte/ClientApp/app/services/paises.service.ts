import { PesquisasService, RetornoPesquisa } from './pesquisas.service';
import { Observable } from 'rxjs/Rx';
import { Resultado } from './resultado.model';
import { Injectable } from '@angular/core';

type TipoServico = "pesquisas" | "conjunturais";

export interface ConsultaResultado {
    servico: TipoServico;
    identificador: any;
}

@Injectable()
export class PaisesService {

    constructor(
        private _pesquisasServ: PesquisasService
    ) { }

    getResultados(consulta: ConsultaResultado): Observable<RetornoPesquisa> {
        let observable;

        switch(consulta.servico) {
            case "pesquisas":
                observable = this._pesquisasServ.get(consulta.identificador);
                break;
            case "conjunturais":
                break;
        }

        return observable ? observable : Observable.of({
            metadata: [],
            resultados: []
        });

    }
}