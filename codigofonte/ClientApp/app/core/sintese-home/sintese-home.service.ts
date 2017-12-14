import { Injectable, Inject } from '@angular/core';
import { ListaComponent } from "../../sandbox/componentes/lista.component";

import { SinteseHomeConfig } from './sintese-home.config'
import { PaisesService } from "../../services";
import { ConsultaResultado } from "../../services/paises.service";

@Injectable()
export class SinteseHomeService {

    private _itemsConfig = SinteseHomeConfig

    constructor(
        private _paisesService: PaisesService
    ) { }

    getSinteseConfiguration(localidadeId: string) {
        return this._itemsConfig.map(item => {
            return {
                titulo: item.titulo,
                config: item.config.map(o => {
                    return Object.assign({}, o, { 'servico': o.servico, localidadeId: localidadeId })
                })
            };
        });
    }

    getSintese(localidadeId: string) {
        const configuration = this.getSinteseConfiguration(localidadeId);
        const consultas = configuration.reduce((agg, item) => {
            return agg.concat(item.config);
        }, <ConsultaResultado[]>[])
        this._paisesService.getDiversosResultados(consultas)
    }

}