import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PesquisasService, RetornoPesquisa } from './pesquisas.service';
import { Resultado } from './resultado.model';
import { RequestService } from './request.service';
import { map, zip } from 'rxjs/operators';

export type TipoServico = "pesquisas" | "conjunturais";
export type ConsultaResultado =
    { servico: "pesquisas", identificador: { pesquisaId: string, indicadorId: string, localidadeId: string } } |
    { servico: 'conjunturais', identificador: any }

@Injectable()
export class PaisesService extends RequestService {

    constructor(
        _httpClient: HttpClient,
        private _http: Http,
        private _pesquisasServ: PesquisasService
    ) {
        super(_httpClient);
    }

    getSintese(siglaPais: string) {
        const params = new HttpParams().set('scope', 'one');

        const metadataObservable = this.request('http://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1', params)
            .pipe(map(metadata => this.flatMetadata(metadata).map(this.toMetadataModel)));
        
        const resultadosObservable = this.request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1/resultados/${siglaPais}`)
            .pipe(map(resultados => resultados.map(this.toResultadoModel)));

        
        return Observable.zip(metadataObservable,resultadosObservable)
            .pipe(map(([metadata, resultados]) => ({ metadata, resultados })));
    }

    getHistorico(siglaPais: string) {
        return this.request(`https://servicodados.ibge.gov.br/api/v1/paises/olimpicos/valores/pais/${siglaPais}`)
            .pipe(map((response: any[]) => response.find(obj => obj.indicador === 44)))
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
            }, { metadata: [], resultados: [] });
        });
    }

    public buildkey(consulta: ConsultaResultado) {
        const servico = consulta.servico
        const { pesquisaId } = consulta.identificador;

        return `${servico}-${pesquisaId}`;
    }


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

    private flatMetadata(metadatas: any[]): any[] {
        let flatMetadatas: any[] = [];

        metadatas.forEach((metadata) => {
            flatMetadatas.push(metadata);
            flatMetadatas.push(...this.flatMetadata(metadata.children).map((m) => {
                m.pai = metadata.id;
                return m;
            }));
        });

        return flatMetadatas;
    }

    private toMetadataModel(metadata: any) {
        return {
            id: metadata.id,
            indicador: metadata.indicador,
            unidade: metadata.unidade ? {
                identificador: metadata.unidade.id,
                classe: metadata.unidade.classe,
                multiplicador: metadata.unidade.multiplicador
            } : undefined,
            notas: metadata.nota,
            fontes: metadata.fontes,
            pai: metadata.pai
        };
    };

    private toResultadoModel(resultado: { id: number, res: { localidade: string, res: any }[] }): Resultado {
        let valorMaisRecente = Object.keys(resultado.res[0].res).reduce((agg, key) => {
            if (resultado.res[0].res[key] && key > agg.periodo) {
                agg.periodo = key;
                agg.valor = resultado.res[0].res[key];
            }

            return agg;
        }, { periodo: "", valor: undefined });

        return {
            id: resultado.id,
            valor: valorMaisRecente.valor,
            periodo: valorMaisRecente.periodo,
            localidade: resultado.res[0].localidade
        }
    }

}
