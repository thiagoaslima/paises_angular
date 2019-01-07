import { Injectable } from "@angular/core";
import { map } from "rxjs/operators/map";
import { tap } from "rxjs/operators/tap";

import { PaisesEnum, PaisesService } from "../shared";
import { objArrayToMap } from "../../utils";

@Injectable()
export class DadosPaisService {
    private _dictionary: { [key: number]: string } = {
        [PaisesEnum.temas.sintese]: "sintese",
        [PaisesEnum.temas.economia]: "economia",
        [PaisesEnum.temas.sociais]: "sociais",
        [PaisesEnum.temas.ambiente]: "ambiente",
        [PaisesEnum.temas.populacao]: "populacao",
        [PaisesEnum.temas.telefonia]: "telefonia"
    };
    constructor(private _paisesService: PaisesService) {}

    getDados(siglaPais: string) {
        let temas = [
            // PaisesEnum.temas.sintese,
            PaisesEnum.temas.economia,
            PaisesEnum.temas.sociais,
            PaisesEnum.temas.ambiente,
            PaisesEnum.temas.populacao,
            PaisesEnum.temas.telefonia,
            PaisesEnum.temas.saude
        ];

        return this._paisesService.getTodosDados(siglaPais).pipe(
            map(({ metadata, resultados }) => {
                debugger;
                console.time("#dadosPais process");
                const resultadosMap = objArrayToMap(resultados);

                const dados = temas.reduce(
                    (agg, tema) => {
                        const item = metadata.find(
                            obj => obj.posicao === tema.toString()
                        );
                        const nomeTema = item ? item.indicador : "";

                        agg[tema] = {
                            tema: nomeTema,
                            valores: []
                        };
                        return agg;
                    },
                    {} as { [key: number]: any }
                );

                for (let met of metadata) {
                    let posicao = met.posicao.split(".");
                    if (posicao.length === 1) {
                        continue;
                    }
                    let temaId = parseInt(posicao[0], 10);
                    if (temas.indexOf(temaId) === -1) {
                        continue;
                    }

                    let resultado = resultadosMap[met.id];
                    let valores: string[] = [];
                    let periodos: string[] = [];

                    if (resultado) {
                        resultado.valores.forEach(
                            (valor: string, idx: number) => {
                                if (
                                    !this._paisesService.isSpecialValue(valor)
                                ) {
                                    valores.push(valor);
                                    periodos.push(resultado.periodos[idx]);
                                }
                            }
                        );
                    }

                    let obj = {
                        id: met.id,
                        titulo: met.indicador,
                        valores: valores,
                        periodos: periodos,
                        unidade: met.unidade,
                        fontes: met.fontes
                    };

                    dados[temaId].valores.push(obj);
                }

                console.timeEnd("#dadosPais process");

                return Object.keys(dados).map(key => {
                    let obj = dados[parseInt(key, 10)];
                    obj.valores.sort(
                        (a: any, b: any) => (a.titulo > b.titulo ? -1 : 1)
                    );
                    return obj;
                });
            })
        );
    }

    getHistorico(paisSigla: string) {
        return this._paisesService.getHistorico(paisSigla).pipe(
            map(resultado =>
                resultado.valor
                    .trim()
                    .replace(/^<p>/, "")
                    .replace(/<\/p>$/, "")
                    .split("</p><p>")
            )
        );
    }
}
