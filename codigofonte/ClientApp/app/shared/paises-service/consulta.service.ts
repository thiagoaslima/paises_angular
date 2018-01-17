import { Injectable } from "@angular/core";

import { Configuration, Consulta } from "./paises-types";
import { PesquisaConsultaFactory } from "../pesquisas-service/pesquisa-consulta.factory";

@Injectable()
export class ConsultaService {

    private _pesquisaConsultaFactory = new PesquisaConsultaFactory();

    toConsultaModel(configuration: Configuration | Configuration[]) {
        configuration = Array.isArray(configuration) ? configuration : [configuration];

        let perServico = configuration.reduce(
            function (agg, obj) {
                let servico = obj.config[0].servico;
                if (!agg[servico]) { agg[servico] = []; }
                agg[servico].push(obj);
                return agg;
            },

            Object.create(null) as { [servico: string]: Configuration[] }
        );

        const consultas: Consulta[] = [];
        Object.keys(perServico).forEach(servico => {
            let consulta: Consulta[];

            switch (servico) {
                case 'pesquisas':
                    consulta = this._pesquisaConsultaFactory.toConsultaModel(perServico.pesquisas);
                    
                default:
                    consulta = this._pesquisaConsultaFactory.toConsultaModel(perServico.pesquisas);
            }

            consultas.push(...consulta);
        });

        return consultas;
    }
}

