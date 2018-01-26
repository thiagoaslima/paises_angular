import { Injectable } from "@angular/core";

import { normalizeToArray } from "../../../utils";
import { Query, Configuration } from "./paises.interface";
import { PesquisasAdapter } from "./adapters/pesquisas-adapter.service";
import { PesquisasService } from "../pesquisas.service";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";



@Injectable()
export class PaisesFacadeService {

    constructor(
        private _pesquisasAdapter: PesquisasAdapter,
        private _pesquisasService: PesquisasService
    ) { }

    getDados(configuration: Configuration | Configuration[]) {
        const _configuration = normalizeToArray(configuration);

        let queriesMap = this._separateQueriesPerService(_configuration);
        

        return Observable
            .zip(
                ...Object.keys(queriesMap).map(serviceName => {
                    switch (serviceName) {
                        case 'pesquisas':
                            return this._getDadosPesquisas(queriesMap.pesquisas);

                        default:
                            return Observable.of([]);
                    }
                })
            );
        
    }

    private _separateQueriesPerService(configuration: Configuration[]): { [queryService: string]: Query[] } {
        return configuration.reduce((obj, configuration) => {
            configuration.queries.forEach(query => {
                if (!obj[query.scope.service]) {
                    obj[query.scope.service] = [];
                }
                obj[query.scope.service].push(query);
            })
            return obj;
        }, Object.create(null));
    }

    private _optimizeQueries(queriesMap: { [queryService: string]: Query[] }) {
        let map = {} as { [queryService: string]: any[] };
        Object.keys(queriesMap).forEach(serviceName => {
            switch (serviceName) {
                case 'pesquisas':
                    map[serviceName] = this._pesquisasAdapter.convert(queriesMap.pesquisas);
            }
        });

        return map;
    }

    private _getDadosPesquisas(queries: Query[]) {
        let _queriesPesquisa = this._pesquisasAdapter.convert(queries);
        console.log('q', _queriesPesquisa);
        let observables = _queriesPesquisa.map(query => this._pesquisasService.get(query.asParameter()));
        return Observable.zip(...observables)
            .pipe(map(resultados => {
                return resultados.reduce((agg, res) => {
                    agg.metadata.push(...res.metadata);
                    agg.resultados.push(...res.resultados);
                    return agg;
                }, { metadata: [] as any[], resultados: [] as any[] });
            }));
    }
}