import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PesquisasService, RetornoPesquisa } from '../pesquisas-service';
import { Resultado } from './resultado.model';
import { Consulta } from './paises-types';

export type ConsultaResultado =
    { servico: "pesquisas", identificador: { pesquisaId: string, indicadorId: string, localidadeId: string } } |
    { servico: 'conjunturais', identificador: any }

@Injectable()
export class PaisesService {

    constructor(
        private _pesquisasServ: PesquisasService
    ) { }

    fetch(consulta: Consulta) {
        let observable;

        switch (consulta.servico) {
            case "pesquisas":
                observable = this._pesquisasServ.get(consulta.identificador);
                break;
            // case "conjunturais":
            //     break;
        }

        return observable ? observable : Observable.of({
            metadata: [],
            resultados: []
        });
    }

    getResultados(consulta: ConsultaResultado): Observable<RetornoPesquisa> {
        let observable;

        switch (consulta.servico) {
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

    getDiversosResultados<T extends ConsultaResultado>(consultas: T[]): Observable<RetornoPesquisa> {
        const requestsObj = <{ [key: string]: ConsultaResultado }>{};

        consultas.forEach(consulta => {
            let key = this.buildkey(consulta);

            if (!requestsObj[key]) {
                requestsObj[key] = <ConsultaResultado>{
                    servico: consulta.servico,
                    identificador: Object.assign({}, consulta.identificador)
                }
            } else {
                this._mergeConsultas(requestsObj[key], consulta);
            }
        });

        const observables = Object.keys(requestsObj).map(key => this.getResultados(requestsObj[key]));
        return Observable.zip(...observables).map(resultados => {
            return resultados.reduce((agg, res) => {
                agg.metadata.push(...res.metadata);
                agg.resultados.push(...res.resultados);
                return agg;
            }, {metadata: [], resultados: []});
        });
    }

    public buildkey(consulta: ConsultaResultado) {
        const servico = consulta.servico;
        const { pesquisaId } = consulta.identificador;

        return `${servico}-${pesquisaId}`;
    }

    /*
    public mergeConsultas<T extends ConsultaResultado>(consultas: T[])<ConsultaResultado[]> {
        const requestsObj = <{ [key: string]: any }>{};

        consultas.forEach(consulta => {
            let key = this.buildkey(consulta);

            if (!requestsObj[key]) {
                requestsObj[key] = <ConsultaResultado>{
                    servico: consulta.servico,
                    identificador: []
                }
            } 
        });

        switch (consulta.servico) {
            case 'pesquisas':
                const indicadores = agg.identificador.indicadorId;
                if (indicadores.split('|').indexOf(consulta.identificador.indicadorId) == -1) {
                    agg.identificador.indicadorId += `|${consulta.identificador.indicadorId}`
                }

                const localidades = agg.identificador.localidadeId;
                if (localidades.split('|').indexOf(consulta.identificador.localidadeId) == -1) {
                    agg.identificador.localidadeId += `|${consulta.identificador.localidadeId}`
                }
        }
    }
    */

    private _mergeConsultas(agg: ConsultaResultado, consulta: ConsultaResultado) {
        switch (consulta.servico) {
            case 'pesquisas':
                const indicadores = agg.identificador.indicadorId;
                if (indicadores.split('|').indexOf(consulta.identificador.indicadorId) == -1) {
                    agg.identificador.indicadorId += `|${consulta.identificador.indicadorId}`
                }

                const localidades = agg.identificador.localidadeId;
                if (localidades.split('|').indexOf(consulta.identificador.localidadeId) == -1) {
                    agg.identificador.localidadeId += `|${consulta.identificador.localidadeId}`
                }
        }

        return agg;
    }
}
