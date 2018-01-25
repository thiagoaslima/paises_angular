import { Injectable } from "@angular/core";
import { Query } from "../paises.interface";


export interface PesquisaQuery extends Query {
    details: {
        indicadorId?: number;
        localidadeId?: string;
    }
}


export class PesquisaIdentificador {
    pesquisaId: string | number;
    indicadorId: number[] = [];
    localidadeId: string[] = [];

    constructor(pesquisaId?: string|number) {
        this.pesquisaId = pesquisaId || '';
    }

    asParameter(separators?: string | { indicadorId: string, localidadeId: string }) {
        let _default = '|';
        let _separators;
        separators = separators || _default;

        if (typeof separators === 'string') {
            _separators = {
                indicadorId: separators,
                localidadeId: separators
            }
        } else {
            _separators = {
                indicadorId: separators.indicadorId || _default,
                localidadeId: separators.localidadeId || _default
            }
        }

        return {
            pesquisaId: this.pesquisaId.toString(),
            indicadorId: this.indicadorId.join(_separators.indicadorId),
            localidadeId: this.localidadeId.join(_separators.localidadeId)
        }
    }
}


@Injectable()
export class PesquisasAdapter {

    public buildkey(query: PesquisaQuery) {
        const service = query.scope.service;
        const pesquisaId = query.scope.id;
        const indicadores = query.details.indicadorId ? 'indicadores' : '';

        return [service, pesquisaId, indicadores].join('-');
    }

    public convert(queries: PesquisaQuery[]) {
        console.log('a', queries);
        const requestsObj = {} as { [key: string]: PesquisaIdentificador };

        queries.forEach(query => {
            let key = this.buildkey(query);
            if (!requestsObj[key]) {
                requestsObj[key] = new PesquisaIdentificador(query.scope.id)
            }

            this._mergeQueries(query, requestsObj[key]);
        });

        console.log('b', JSON.stringify(requestsObj, null, 2));
        return Object.values(requestsObj);
    }

    private _mergeQueries(query: PesquisaQuery, agg: PesquisaIdentificador) {
        const { indicadorId, localidadeId } = query.details;

        if (indicadorId && !agg.indicadorId.includes(indicadorId)) {
            agg.indicadorId.push(indicadorId);
        }

        if (localidadeId && !agg.localidadeId.includes(localidadeId)) {
            agg.localidadeId.push(localidadeId);
        }
    }
}