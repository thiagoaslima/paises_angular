import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { zip } from 'rxjs/operators/zip';
import { tap } from 'rxjs/operators/tap';

import { RequestService } from '../request.service';
import { PaisesEnum } from './paises.enum';
import { chunkArray, flattenArray } from '../../../utils';
import { LocalidadeService } from '../localidade/localidade.service';
import { Ranking, ResultadosIndicador, MetadataIndicador } from './interfaces';

@Injectable()
export class PaisesService extends RequestService {

    constructor(
        _httpClient: HttpClient,
        private _localidadeService: LocalidadeService,
        @Inject('SPECIAL_VALUES') private _specialValues: { cases: {[key: string]: string}, values: {[key: string]: string}  }
    ) {
        super(_httpClient);
    }

    getSintese(siglaPais: string) {
        const metadataObservable = this.getMetadataIndicador(1, 'one');

        const resultadosObservable: Observable<ResultadosIndicador[]> = this.request(`https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/1/resultados/${siglaPais}`)
            .pipe(map(resultados => resultados.map(this.toResultadoModel)));

        return metadataObservable.pipe(
            zip(resultadosObservable),
            map(([metadata, resultados]) => ({ metadata, resultados }))
        );
    }

    getMetadataIndicador(indicadorId: number, scope = 'sub') {
        const metadataParams = new HttpParams().set('scope', scope);
        return this.request(`https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/indicadores/${indicadorId}`, metadataParams)
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

    getRanking(indicadorId: number): Observable<Ranking> {
        const metadataIndicador = this.getMetadataIndicador(indicadorId, 'one');
        const periodoMaisRecente = metadataIndicador.pipe(
            map(indicador => indicador[0]),
            map(indicador => indicador.fontes.map((fonte: any) => fonte.periodo).sort()),
            map(periodos => periodos.slice(-1))
        )

        return periodoMaisRecente.pipe(
            switchMap(periodo => this.request(`https://servicodados.ibge.gov.br/api/v1/pesquisas/10071/periodos/${periodo}/indicadores/${indicadorId}/ranking?natureza=1`)),
            map(ranking => ranking.res = ranking.res.map((obj: any) => {
                delete obj['#'];
                return obj;
            }))
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
                !this.isSpecialValue(valoresValidos[periodo]) &&
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

    isSpecialValue(valor: string) {
        return Boolean(this._specialValues.cases[valor])
    }

}
