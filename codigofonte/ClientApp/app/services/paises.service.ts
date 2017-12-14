import { PesquisasService, RetornoPesquisa } from './pesquisas.service';
import { Observable } from 'rxjs/Rx';
import { Resultado } from './resultado.model';
import { Injectable } from '@angular/core';

type TipoServico = "pesquisas" | "conjunturais";

export type ConsultaResultado =
    { servico: "pesquisas", identificador: { pesquisaId: string, indicadorId: string, localidadeId: string } } |
    { servico: 'conjunturais', identificador: any }


@Injectable()
export class PaisesService {

    constructor(
        private _pesquisasServ: PesquisasService
    ) { }

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

    getDiversosResultados<T extends ConsultaResultado>(consultas: T[]): Observable<RetornoPesquisa[]> {
        const requestsObj = <{ [key: string]: ConsultaResultado }>{};

        consultas.forEach(consulta => {
            let key = this._buildkey(consulta);

            if (!requestsObj[key]) {
                requestsObj[key] = <ConsultaResultado>{
                    servico: consulta.servico,
                    identificador: Object.assign({}, consulta.identificador)
                }
            } else {
                this._mergeConsultas(requestsObj[key], consulta);
            }
        });

        return Observable.zip(
            consultas.map(consulta => this.getResultados(consulta))
        );
    }

    _buildkey(consulta: ConsultaResultado) {
        const servico = consulta.servico
        const { pesquisaId, localidadeId } = consulta.identificador;

        return `${servico}-${pesquisaId}-${localidadeId}`;
    }


    _mergeConsultas(agg: ConsultaResultado, consulta: ConsultaResultado) {
        switch (consulta.servico) {
            case 'pesquisas':
                const indicadores = agg.identificador.indicadorId;
                if (indicadores.split('|').indexOf(consulta.identificador.indicadorId) == -1) {
                    agg.identificador.indicadorId += `|${consulta.identificador.indicadorId}`
                }

                const localidades = agg.identificador.localidadeId;
                if (indicadores.split('|').indexOf(consulta.identificador.localidadeId) == -1) {
                    agg.identificador.localidadeId += `,${consulta.identificador.localidadeId}`
                }
        }

        return agg;
    }
}
