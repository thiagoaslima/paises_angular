import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MetadataResultado, Resultado } from './resultado.model';

export interface RetornoPesquisa {
    metadata: MetadataResultado[];
    resultados: Resultado[];
}

@Injectable()
export class PesquisasService {
    constructor(
        private _http: Http
    ) { }

    flatMetadata(metadatas: any[]): any[] {
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

    toMetadataModel(metadata: any): MetadataResultado {
        return {
            id: metadata.id,
            indicador: metadata.indicador,
            unidade: metadata.unidade ? {
                identificador: metadata.unidade.id,
                classe: metadata.unidade.classe,
                multiplicador: metadata.unidade.multiplicador
            }: undefined,
            notas: metadata.nota,
            fontes: metadata.fontes,
            pai: metadata.pai
        };
    };
    
    toResultadoModel(resultado: { id:number, res:{localidade:string, res:any}[] }): Resultado {
        let valorMaisRecente = Object.keys(resultado.res[0].res).reduce((agg, key) => {
            if(resultado.res[0].res[key] && key > agg.periodo) {
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
    
    get(identificador: { pesquisaId: string, indicadorId: string, localidadeId: string }) {
        let { pesquisaId, indicadorId, localidadeId } = identificador;    

        return Observable.zip(
            this._getPesquisa(pesquisaId),
            this._getMetadata(pesquisaId, indicadorId),
            this._getResultado(pesquisaId, indicadorId, localidadeId)
        )
            .map(([pesquisa, metadata, resultados]) => {
                return {
                    pesquisa,
                    metadata,
                    resultados
                };
            });
    }

    private _getPesquisa(pesquisaId = '') {
        return this._request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${pesquisaId}`);
    }

    private _getMetadata(pesquisaId: string, indicadorId: string) {
        if (!indicadorId) {
            return [];
        }
        return this._request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${pesquisaId}/indicadores/${indicadorId}`)
            .map(metadata => this.flatMetadata(metadata).map(this.toMetadataModel));

    }

    private _getResultado(pesquisaId: string, indicadorId: string, localidadeId: string) {
        if (!localidadeId) {
            return []
        }
        return this._request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${pesquisaId}/indicadores/${indicadorId}/resultados/${localidadeId}`)
            .map(resultados => resultados.map(this.toResultadoModel));
    }

    private _request(url: string) {

        return this._http.get(url)
            .retry(3)
            .map(res => {
                if (res.status === 404) {
                    throw new Error(`Não foi encontrado o endereço solicitado. [url: ${url}]`);
                }

                if (res.status === 400 || res.status === 500) {
                    throw new Error(`status: ${res.status}`);
                }

                return res.json();
            })
            .share();
    }
}
