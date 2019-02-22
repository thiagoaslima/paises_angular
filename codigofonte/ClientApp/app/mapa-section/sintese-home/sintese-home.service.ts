import { Injectable, Inject } from '@angular/core';

import { SinteseHomeConfig } from './sintese-home.config';
import { PaisesEnum, PaisesService } from '../../shared';
import { objArrayToMap } from '../../../utils/objArrayToMap';

import { map } from 'rxjs/operators';

@Injectable()
export class SinteseHomeService {
    private _itemsConfig = SinteseHomeConfig;

    constructor(private _paisesService: PaisesService) {}

    getSintese(siglaPais: string) {
        const order = [
            PaisesEnum.sintese.capital,
            PaisesEnum.sintese.extensao,
            PaisesEnum.sintese.idioma,
            PaisesEnum.sintese.localizacao,
            PaisesEnum.sintese.moeda,
        ];

        return this._paisesService.getSintese(siglaPais).pipe(
            map((response: any) => {
                const metadataMap = objArrayToMap(response.metadata);
                const resultadosMap = objArrayToMap(response.resultados);

                return order.map(id => {
                    let metaUnidade = metadataMap[id].unidade;
                    let unidade = '';

                    if (metaUnidade) {
                        let identificador = metaUnidade.identificador;
                        let multiplicador =
                            metaUnidade.multiplicador &&
                            metaUnidade.multiplicador != 1
                                ? ` (× ${metaUnidade.multiplicador})`
                                : '';

                        unidade = identificador + unidade;
                    }

                    return {
                        titulo: metadataMap[id].indicador,
                        valor: resultadosMap[id]
                            ? resultadosMap[id].valorMaisRecente
                            : null,
                        unidade,
                    };
                });
            })
        );
    }
}
