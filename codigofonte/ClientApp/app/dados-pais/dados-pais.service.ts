import { Injectable } from "@angular/core";
import { map } from "rxjs/operators/map";
import { tap } from "rxjs/operators/tap";

import { PaisesEnum, PaisesService } from "../shared";
import { objArrayToMap } from "../../utils";

@Injectable()
export class DadosPaisService {
    private _dictionary: { [key: number]: string } = {
        [PaisesEnum.temas.sintese]: 'sintese',
        [PaisesEnum.temas.economia]: 'economia',
        [PaisesEnum.temas.sociais]: 'sociais',
        [PaisesEnum.temas.ambiente]: 'ambiente',
        [PaisesEnum.temas.populacao]: 'populacao',
        [PaisesEnum.temas.telefonia]: 'telefonia'
    }
    constructor(
        private _paisesService: PaisesService
    ) { }

    getDados(siglaPais: string) {
        let temas = [
            // PaisesEnum.temas.sintese,
            PaisesEnum.temas.economia,
            PaisesEnum.temas.sociais,
            PaisesEnum.temas.ambiente,
            PaisesEnum.temas.populacao,
            PaisesEnum.temas.telefonia,
            PaisesEnum.temas.olimpicos
        ];

        return this._paisesService.getTodosDados(siglaPais).pipe(
            map(response => {
                console.time('#dadosPais process');
                const resultadosMap = objArrayToMap(response.resultados);

                let dados = temas.map(tema => {
                    const parent = response.metadata.find((obj: any) => obj.posicao === tema.toString());
                    let metadata = this._paisesService.flatMetadata(parent.children).map(this._paisesService.toMetadataModel)

                    let values = metadata.map(obj => {
                        let resultado = resultadosMap[obj.id];
                        let valores: string[] = [];
                        let periodos: string[] = [];

                        if (resultado) {

                            resultado.valores.forEach((valor: string, idx: number) => {
                                if (!PaisesService.isSpecialValue(valor)) {
                                    valores.push(valor);
                                    periodos.push(resultado.periodos[idx]);
                                }
                            });

                            if (valores.length > 5) {
                                valores.length = 5;
                                periodos.length = 5;
                            }
                        }

                        return {
                            titulo: obj.indicador,
                            valores: valores,
                            periodos: periodos,
                            unidade: obj.unidade,
                            fontes: obj.fontes
                        };

                    }).sort((a, b) => a.titulo > b.titulo ? -1 : 1);

                    return {
                        tema: parent.indicador,
                        valores: values
                    }

                });

                console.timeEnd('#dadosPais process');

                return dados;
            })
        );
    }

    getHistorico(paisSigla: string) {
        return this._paisesService.getHistorico(paisSigla).pipe(
            map(resultado => resultado.valor.trim().replace(/^<p>/, '').replace(/<\/p>$/, '').split('</p><p>'))
        )
    }


}