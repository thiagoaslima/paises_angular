import { Injectable, Inject } from '@angular/core';
import { ListaComponent } from "../../sandbox/componentes/lista.component";

import { SinteseHomeConfig } from './sintese-home.config'
import { PaisesService } from "../../services";
import { ConsultaResultado } from "../../services/paises.service";
import { MetadataResultado, Resultado } from "../../services/resultado.model";

@Injectable()
export class SinteseHomeService {
    private _itemsConfig = SinteseHomeConfig

    constructor(
        private _paisesService: PaisesService
    ) { }

    getSinteseConfiguration(localidadeId?: string) {
        if (!localidadeId) {
            return this._itemsConfig.slice();
        }
        return this._itemsConfig.map(item => {
            return {
                titulo: item.titulo,
                config: item.config.map(o => {
                    let item = Object.assign({}, o, { servico: <'pesquisas' | 'conjunturais'>o.servico })
                    if (item.identificador.hasOwnProperty('localidadeId')) {
                        item.identificador.localidadeId = localidadeId;
                    }
                    return item;
                })
            };
        });
    }

    getSintese(localidadeId: string) {
        const configuration = this.getSinteseConfiguration(localidadeId);
        const consultas = configuration.reduce((agg, item) => {
            return agg.concat((<any>item).config);
        }, <ConsultaResultado[]>[])
        return this._paisesService.getDiversosResultados(consultas)
            .map(response => {
                const metaMap = response.metadata.reduce((agg, meta) => {
                    agg[meta.id.toString()] = meta;
                    return agg;
                }, <{ [id: string]: MetadataResultado }>{});

                const resultadosMap = response.resultados.reduce((agg, res) => {
                    agg[res.id.toString()] = res;
                    return agg;
                }, <{ [id: string]: Resultado }>{});

                return configuration.map(obj => {
                    const config = obj.config[0];
                    const id = config.identificador.indicadorId;

                    let metaUnidade = metaMap[id].unidade;
                    let unidade = '';

                    if (metaUnidade) {
                        let identificador = metaUnidade.identificador;
                        let multiplicador = metaUnidade.multiplicador && metaUnidade.multiplicador != 1 
                            ? ` (× ${metaUnidade.multiplicador})` : '';

                        unidade = identificador + unidade
                    }

                    return {
                        titulo: obj.titulo || metaMap[id].indicador,
                        valor: resultadosMap[id].valor,
                        unidade: unidade
                    };
                })
            })
    }

}