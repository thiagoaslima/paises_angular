import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { zip } from 'rxjs/operators/zip';
import { tap } from 'rxjs/operators/tap';

import { RequestService } from '../request.service';
import { PaisesEnum } from './paises.enum';
import { objArrayToMap } from '../../../utils';
import { LocalidadeService } from '../localidade/localidade.service';
import { Ranking, ResultadosIndicador, MetadataIndicador } from './interfaces';

const TEMA_SAUDE = {
    id: 0,
    indicador: 'Saúde',
    posicao: PaisesEnum.temas.saude.toString(),
    notas: [],
    fontes: [],
    unidade: {
        identificador: '',
        classe: '',
        multiplicador: 1,
    },
    pai: null,
} as MetadataIndicador;

@Injectable()
export class PaisesService extends RequestService {
    constructor(
        _httpClient: HttpClient,
        private _localidadeService: LocalidadeService,
        @Inject('SPECIAL_VALUES')
        private _specialValues: {
            cases: { [key: string]: string };
            values: { [key: string]: string };
        }
    ) {
        super(_httpClient);
    }

    getSintese(siglaPais: string) {
        const metadataObservable = this.getMetadataIndicador(1, 'one');
        const url = `https://servicodados.ibge.gov.br/api/v1/pesquisas/${
            PaisesEnum.pesquisaId
        }/indicadores/1/resultados/${siglaPais}`;
        const resultadosObservable: Observable<any[]> = this.request(url);
        // .pipe(map(resultados => resultados.map(this.toResultadoModel.bind(this))));

        return metadataObservable.pipe(
            zip(resultadosObservable),
            map(([metadata, resultadosRaw]) => {
                const metadataMap = objArrayToMap(metadata);
                const resultados = resultadosRaw.map(res =>
                    this.toResultadoModel(metadataMap[res.id], res)
                );
                return { metadata, resultados };
            })
        );
    }

    getTemas() {
        return this.getMetadataIndicador(0, 'one').pipe(
            map(temas => {
                return temas.filter(
                    tema =>
                        ![
                            PaisesEnum.temas.sintese,
                            PaisesEnum.temas.olimpicos,
                            PaisesEnum.temas.ODM,
                            PaisesEnum.temas.ODS,
                        ].includes(Number(tema.posicao))
                );
            }),
            map(temas => temas.concat(TEMA_SAUDE))
        );
    }

    getIndicadores(temaId: number) {
        let _temaId = temaId;
        if (temaId === PaisesEnum.temas.saude) {
            _temaId = PaisesEnum.temas.sociais;
        }
        return this.getMetadataIndicador(_temaId, 'sub').map(indicadores => {
            // Necessária essa conferencia para tirar o primeiro nivel (que é o próprio tema)
            // e garantir a exibicao do tema saude, que nao existe na base de dados
            return indicadores.filter(
                indicador =>
                    indicador.posicao.length > 1 &&
                    indicador.posicao.startsWith(String(temaId))
            );
        });
    }

    getMetadataIndicador(indicadorId: number, scope = 'sub') {
        const metadataParams = new HttpParams().set('scope', scope);
        return this.request(
            `https://servicodados.ibge.gov.br/api/v1/pesquisas/${
                PaisesEnum.pesquisaId
            }/indicadores/${indicadorId}`,
            metadataParams
        ).pipe(
            map(metadata =>
                this.flatMetadata(metadata).map(this.toMetadataModel)
            ),
            map(this._hackTemaSaude),
            tap(val => {
                console.log(val);
            })
        );
    }

    getHistorico(
        siglaPais: string
    ): Observable<{
        pais: string;
        periodo: string;
        indicador: number;
        valor: {
            pt: string[];
            en: string[];
            es: string[];
        };
    }> {
        const breakParagraphs = (str: string) => {
            if (!str || !str.trim()) {
                return [''];
            }

            return str
                .trim()
                .replace(/^<p>/, '')
                .replace(/<\/p>$/, '')
                .split('</p><p>');
        };

        return this.request(
            `https://servicodados.ibge.gov.br/api/v1/paises/olimpicos/valores/pais/${siglaPais}`
        ).pipe(
            map((response: any[]) =>
                response.find(obj => obj.indicador === 44)
            ),
            map(obj => ({
                pais: obj.pais,
                periodo: obj.periodo,
                indicador: obj.indicador,
                valor: {
                    pt: breakParagraphs(obj.valor),
                    en: breakParagraphs(obj.valor_en),
                    es: breakParagraphs(obj.valor_es),
                },
            }))
        );
    }

    getTodosDados(siglaPais: string) {
        const metadataObservable = this.getMetadataIndicador(0);
        // .pipe(
        //   map(resultados =>
        //     resultados.filter(
        //       (obj: any) => ["2", "8", "9"].indexOf(obj.posicao.charAt(0)) === -1
        //     )
        //   )
        // );
        // this.request('https://servicodados.ibge.gov.br/api/v1/pesquisas/${PaisesEnum.pesquisaId}/indicadores/0');

        const resultadosObservable = this.request(
            `https://servicodados.ibge.gov.br/api/v1/pesquisas/${
                PaisesEnum.pesquisaId
            }/indicadores/0/resultados/${siglaPais}`
        );

        return metadataObservable.pipe(
            zip(resultadosObservable),
            map(([metadata, resultadosRaw]) => {
                const resultadosMap = objArrayToMap(resultadosRaw);

                const resultados = metadata.reduce(
                    (agg, meta: any) => {
                        const resultado = resultadosMap[meta.id];
                        if (resultado) {
                            agg.push(this.toResultadoModel(meta, resultado));
                        }
                        return agg;
                    },
                    [] as ResultadosIndicador[]
                );

                return { metadata, resultados };
            })
        );
    }

    getRanking(
        indicadorId: number,
        scope = 'one',
        period?: string
    ): Observable<Ranking> {
        const metadataIndicador = this.getMetadataIndicador(indicadorId, scope);
        const periodoMaisRecente = metadataIndicador.pipe(
            map(indicador => indicador[0]),
            map(indicador =>
                indicador.fontes.map((fonte: any) => fonte.periodo).sort()
            ),
            map(periodos => periodos.slice(-1))
        );

        return periodoMaisRecente.pipe(
            switchMap(periodo =>
                this.request(
                    `https://servicodados.ibge.gov.br/api/v1/pesquisas/${
                        PaisesEnum.pesquisaId
                    }/periodos/${period ||
                        periodo}/indicadores/${indicadorId}/ranking?natureza=1`
                )
            ),
            map(array => array[0])
        );
    }

    flatMetadata(metadatas: any[]): any[] {
        const flatMetadatas: any[] = [];

        metadatas.forEach(metadata => {
            flatMetadatas.push(metadata);
            flatMetadatas.push(
                ...this.flatMetadata(metadata.children).map(m => {
                    m.pai = metadata.id;
                    return m;
                })
            );
        });

        return flatMetadatas;
    }

    toMetadataModel(metadata: any) {
        return {
            id: metadata.id,
            posicao: metadata.posicao,
            indicador: metadata.indicador,
            unidade: metadata.unidade
                ? {
                      identificador: metadata.unidade.id,
                      classe: metadata.unidade.classe,
                      multiplicador: metadata.unidade.multiplicador,
                  }
                : {
                      identificador: '',
                      classe: '',
                      multiplicador: 1,
                  },
            notas: metadata.nota,
            fontes: metadata.fonte || [],
            pai: metadata.pai || null,
        } as MetadataIndicador;
    }

    toResultadoModel(
        metadata: MetadataIndicador,
        resultado: { id: number; res: { localidade: string; res: any }[] }
    ) {
        const periodosMetadata =
            metadata.fontes && metadata.fontes.length > 0
                ? metadata.fontes.map(fonte => fonte.periodo).sort()
                : ['-'];

        const periodosResultados =
            resultado.res[0] && resultado.res[0].res
                ? Object.keys(resultado.res[0].res)
                      .filter(key => resultado.res[0].res[key] !== null)
                      .sort()
                : ['-'];

        const periodos = periodosResultados || periodosMetadata;

        const valores = periodos.map(periodo => resultado.res[0].res[periodo]);

        const valorMaisRecente = valores.reduce(
            (agg, valor, idx) => {
                if (
                    !this.isSpecialValue(valor) &&
                    periodos[idx] > agg.periodo
                ) {
                    agg.periodo = periodos[idx];
                    agg.valor = valor;
                }

                return agg;
            },
            { periodo: '', valor: '' }
        );

        return {
            id: resultado.id,
            valorMaisRecente: valorMaisRecente.valor,
            periodoMaisRecente: valorMaisRecente.periodo,
            localidade: resultado.res[0].localidade,
            valores,
            periodos,
        } as ResultadosIndicador;
    }

    isSpecialValue(valor: string) {
        return Boolean(this._specialValues.cases[valor]);
    }

    _hackTemaSaude(metadata: MetadataIndicador[]) {
        const indicadores = {
            62973: {
                id: 62973,
                posicao: PaisesEnum.temas.saude + '.1',
                indicador: 'Calorias consumidas',
            },
            77829: {
                id: 77829,
                posicao: PaisesEnum.temas.saude + '.1',
                indicador: 'Calorias consumidas',
            },
            // 62967: {
            //     id: 62967,
            //     posicao: "100.2",
            //     indicador: "Esperança de vida ao nascer"
            // },
            62971: {
                id: 62971,
                posicao: PaisesEnum.temas.saude + '.2',
                indicador: 'População subnutrida',
            },
            77834: {
                id: 77834,
                posicao: PaisesEnum.temas.saude + '.2',
                indicador: 'População subnutrida',
            },
            // 62986: {
            //     id: 62986,
            //     posicao: "100.4",
            //     indicador: "Taxa bruta de mortalidade"
            // },
            // 62987: {
            //     id: 62987,
            //     posicao: "100.5",
            //     indicador: "Taxa bruta de natalidade"
            // }
        } as { [key: number]: any };

        let shouldInclude = true;
        metadata.forEach(meta => {
            if (indicadores[meta.id]) {
                meta.posicao = indicadores[meta.id].posicao;

                if (shouldInclude) {
                    shouldInclude = false;
                    metadata.unshift(TEMA_SAUDE);
                }
            }
        });

        return metadata;
    }
}
