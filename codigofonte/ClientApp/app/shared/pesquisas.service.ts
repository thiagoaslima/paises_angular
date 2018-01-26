import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MetadataResultado, Resultado } from './resultado.model';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';

export interface RetornoPesquisa {
    metadata: MetadataResultado[];
    resultados: Resultado[];
}

@Injectable()
export class PesquisasService extends RequestService {
    constructor(
        _httpClient: HttpClient,
        private _http: Http
    ) { 
        super(_httpClient);
    }

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
    
    toResultadoModel(resultado: { id:number, res:{localidade:string, res:any}[] }) {
        let valorMaisRecente = Object.keys(resultado.res[0].res).reduce((agg, key) => {
            if(resultado.res[0].res[key] && key > agg.periodo) {
                agg.periodo = key;
                agg.valor = resultado.res[0].res[key];
            }

            return agg;
        }, { periodo: "", valor: undefined });

        return {
            id: resultado.id,
            valorMaisRecente: valorMaisRecente.valor,
            periodoMaisRecente: valorMaisRecente.periodo,
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
        return this.request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${pesquisaId}`);
    }

    private _getMetadata(pesquisaId: string, indicadorId: string) {
        if (!indicadorId) {
            return [];
        }
        return this.request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${pesquisaId}/indicadores/${indicadorId}`)
            .map(metadata => this.flatMetadata(metadata).map(this.toMetadataModel));

    }

    private _getResultado(pesquisaId: string, indicadorId: string, localidadeId: string) {
        if (!localidadeId) {
            return []
        }
        return this.request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${pesquisaId}/indicadores/${indicadorId}/resultados/${localidadeId}`)
            .map(resultados => resultados.map(this.toResultadoModel));
    }
}
