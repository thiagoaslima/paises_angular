import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { map } from 'rxjs/operators/map';
import { zip } from 'rxjs/operators/zip';
import { tap } from 'rxjs/operators/tap';

import { RequestService } from '../request.service';
import { PaisesEnum } from './paises.enum';
import { chunkArray, flattenArray } from '../../../utils';
import { LocalidadeService } from '../localidade/localidade.service';
import { ResultadosIndicador, MetadataIndicador } from './interfaces';

@Injectable()
export class PaisesService extends RequestService {

    constructor(
        _httpClient: HttpClient,
        private _localidadeService: LocalidadeService
    ) {
        super(_httpClient);
    }

    getSintese(siglaPais: string) {
        const metadataParams = new HttpParams().set('scope', 'one');

        const metadataObservable = this.request('https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1', metadataParams)
            .pipe(map(metadata => this.flatMetadata(metadata).map(this.toMetadataModel)));

        const resultadosObservable: Observable<ResultadosIndicador[]> = this.request(`https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1/resultados/${siglaPais}`)
            .pipe(map(resultados => resultados.map(this.toResultadoModel)));


        return metadataObservable.pipe(
            zip(resultadosObservable),
            map(([metadata, resultados]) => ({ metadata, resultados }))
        );
    }

    getMetadataIndicador(indicadorId: number) {
        return this.request(`https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/${indicadorId}`)
            .pipe(map(metadata => this.flatMetadata(metadata).map(this.toMetadataModel)));
    }

    getHistorico(siglaPais: string): Observable<{ pais: string, periodo: string, indicador: number, valor: string, valor_en: string }> {
        return this.request(`https://servicodados.ibge.gov.br/api/v1/paises/olimpicos/valores/pais/${siglaPais}`)
            .pipe(map((response: any[]) => response.find(obj => obj.indicador === 44)))
    }

    getTodosDados(siglaPais: string) {
        const metadataObservable = this.request('https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/0');

        const resultadosObservable = this.request(`https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/0/resultados/${siglaPais}`)
            .pipe(map(resultados => resultados.map((res: any) => this.toResultadoModel(res))));


        return metadataObservable.pipe(
            zip(resultadosObservable),
            map(([metadata, resultados]) => ({ metadata, resultados }))
        );
    }

    /*
     * TODO
     * refatorar servicor para oferecer uma API compatível
     */
    getRanking(indicadorId: number): Observable<ResultadosIndicador[]> {
        console.time("getRanking");
        const periodos = ["2018", "2017", "2016", "2015", "2014", "2014-2016", "2013-2015", "2012-2014", "2010-2015", "-"].join("|");
        const siglas = this._localidadeService.getAllSiglas();
        const conjuntos = chunkArray(siglas, Math.ceil(siglas.length / 5));

        return Observable.zip(
            ...conjuntos.map(siglas => this.request(`https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/periodos/${periodos}/indicadores/${indicadorId}/resultados/${siglas.join('|')}`))
        ).pipe(
            tap(_ => console.timeEnd("getRanking")),
            tap(_ => console.time("rankingProcess")),
            map((resposta: any[]) => {
                resposta = flattenArray(resposta);

                let resultados = resposta
                    .reduce((agg, obj) => {
                        agg = agg.concat(obj.res);
                        return agg;
                    }, [])
                    .reduce((agg: any, obj: any) => {
                        agg[obj.localidade] = obj;
                        return agg;
                    }, {});

                let arr = Object.keys(resultados).reduce((agg: any, key: any) => {
                    let model = this.toResultadoModel({ id: indicadorId, res: [resultados[key]] });
                    agg = agg.concat(model);
                    return agg;
                }, [] as any[]);

                return arr;
            }),
            tap(_ => console.timeEnd("rankingProcess")),
        )
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
            } : {
                    identificador: "",
                    classe: "",
                    multiplicador: 1
                },
            notas: metadata.nota,
            fontes: metadata.fonte,
            pai: metadata.pai
        };
    }

    toResultadoModel(resultado: { id: number, res: { localidade: string, res: any }[] }) {
        const that = this;
        let valoresValidos = Object.keys(resultado.res[0].res).reduce((agg, periodo) => {
            if (resultado.res[0].res[periodo]) {
                agg[periodo] = resultado.res[0].res[periodo];
            }

            return agg;
        }, {} as { [periodo: string]: string });

        let valorMaisRecente = Object.keys(valoresValidos).reduce((agg, periodo) => {
            if (
                !PaisesService.isSpecialValue(valoresValidos[periodo]) && 
                periodo > agg.periodo
            ) {
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
        };
    }

    static isSpecialValue(valor: string) {
        switch (valor) {
            case "99999999999999":
            case "99999999999998":
                return true

            default:
                return false;
        }
    }

}
