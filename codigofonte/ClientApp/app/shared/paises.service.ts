import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { PesquisasService, RetornoPesquisa } from './pesquisas.service';
import { Resultado } from './resultado.model';
import { RequestService } from './request.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { zip } from 'rxjs/operators/zip';
import { tap } from 'rxjs/operators/tap';
import { PaisesEnum } from './paises.enum';

export type TipoServico = "pesquisas" | "conjunturais";
export type ConsultaResultado =
    { servico: "pesquisas", identificador: { pesquisaId: string, indicadorId: string, localidadeId: string } } |
    { servico: 'conjunturais', identificador: any }

@Injectable()
export class PaisesService extends RequestService {

    constructor(
        _httpClient: HttpClient
    ) {
        super(_httpClient);
    }

    getSintese(siglaPais: string) {
        const metadataParams = new HttpParams().set('scope', 'one');

        const metadataObservable = this.request('http://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1', metadataParams)
            .pipe(map(metadata => this.flatMetadata(metadata).map(this.toMetadataModel)));

        const resultadosObservable = this.request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1/resultados/${siglaPais}`)
            .pipe(map(resultados => resultados.map(this.toResultadoModel)));


        return metadataObservable.pipe(
            zip(resultadosObservable),
            map(([metadata, resultados]) => ({ metadata, resultados }))
        );
    }

    getHistorico(siglaPais: string) {
        return this.request(`https://servicodados.ibge.gov.br/api/v1/paises/olimpicos/valores/pais/${siglaPais}`)
            .pipe(map((response: any[]) => response.find(obj => obj.indicador === 44)))
    }

    getTodosDados(siglaPais: string) {
        const metadataObservable = this.request('http://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/0')

        const resultadosObservable = this.request(`http://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/0/resultados/${siglaPais}`)
            .pipe(map(resultados => resultados.map(this.toResultadoModel)));


        return metadataObservable.pipe(
            tap(_ => console.time('#getDados')),
            zip(resultadosObservable),
            map(([metadata, resultados]) => ({ metadata, resultados })),
            tap(obj => { console.timeEnd('#getDados'); }),
        );
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

    toMetadataModel(metadata: any) {
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

    toResultadoModel(resultado: { id: number, res: { localidade: string, res: any }[] }): Resultado {
        let valoresValidos = Object.keys(resultado.res[0].res).reduce((agg, periodo) => {
            if (resultado.res[0].res[periodo]) {
                agg[periodo] = resultado.res[0].res[periodo];
            }

            return agg;
        }, {} as { [periodo: string]: string });

        let valorMaisRecente = Object.keys(valoresValidos).reduce((agg, periodo) => {
            if (valoresValidos[periodo] && periodo > agg.periodo) {
                agg.periodo = periodo;
                agg.valor = valoresValidos[periodo];
            }

            return agg;
        }, { periodo: "", valor: '' });

        let periodos = Object.keys(valoresValidos).sort();
        let valores = periodos.map(periodo => valoresValidos[periodo]);

        return {
            id: resultado.id,
            valorMaisRecente: valorMaisRecente.valor,
            periodoMaisRecente: valorMaisRecente.periodo,
            localidade: resultado.res[0].localidade,
            valores,
            periodos
        }
    }

}
