import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { PaisesEnum, PaisesService } from "../shared";
import { objArrayToMap } from "../../utils";

@Injectable()
export class DadosPaisService  {
    private _dictionary: {[key: number]: string} = {
        [PaisesEnum.temas.sintese]: 'sintese',
        [PaisesEnum.temas.economia]: 'economia',
        [PaisesEnum.temas.sociais]: 'sociais',
        [PaisesEnum.temas.ambiente]: 'ambiente',
        [PaisesEnum.temas.populacao]: 'populacao',
        [PaisesEnum.temas.telefonia]: 'telefonia'
    }
    constructor(
        private _paisesService: PaisesService
    ) {}

    getDados(siglaPais: string) {
        let setores = [
            PaisesEnum.temas.sintese,
            PaisesEnum.temas.economia,
            PaisesEnum.temas.sociais,
            PaisesEnum.temas.ambiente,
            PaisesEnum.temas.populacao,
            PaisesEnum.temas.telefonia
        ];

        return this._paisesService.getTodosDados(siglaPais).pipe(
            map(response => {
                const resultadosMap = objArrayToMap(response.resultados);

                return setores.reduce((agg: any, id) => {
                    const parent = response.metadata.find((obj: any) => obj.posicao === id.toString());
                    let metadata = this._paisesService.flatMetadata(parent.children).map(this._paisesService.toMetadataModel)

                    agg[this._dictionary[id]] = metadata.map(obj => {
                        return Object.assign({}, obj, {resultados: resultadosMap[obj.id]})
                    }).sort( (a, b) => a.indicador > b.indicador ? -1 : 1);

                    return agg;
                }, {});
            })
        );
    }

    getHistorico(paisSigla: string) {
        return this._paisesService.getHistorico(paisSigla).pipe(
            map(resultado => resultado.valor.trim().replace(/^<p>/, '').replace(/<\/p>$/, '').split('</p><p>'))
        )
    }

    
}