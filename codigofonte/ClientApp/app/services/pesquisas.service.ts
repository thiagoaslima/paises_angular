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
    
    get(identificador: {pesquisaId: string, indicadorId: string, localidadeId: string}): Observable<RetornoPesquisa> {
        return Observable.zip(
            this._http.get(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${identificador.pesquisaId}/indicadores/${identificador.indicadorId}/resultados/${identificador.localidadeId}`),
            this._http.get(`http://servicodados.ibge.gov.br/api/v1/pesquisas/${identificador.pesquisaId}/indicadores/${identificador.indicadorId}`)
        )
            .map(([resResultado, resMetadata]) => [resResultado.json(), resMetadata.json()])
            .map(([resultados, metadata]) => {
                return {
                    metadata: this.flatMetadata(metadata).map(this.toMetadataModel),
                    resultados: resultados.map(this.toResultadoModel)
                };
            });
    }
}
