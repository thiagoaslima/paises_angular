import { Configuration } from "./paises-types";
import { PesquisaConsultaFactory } from "../pesquisas-service/pesquisa-consulta.factory";
import { Injectable } from "@angular/core";

@Injectable()
export class ConsultaService {

    private _pesquisaConsultaFactory = new PesquisaConsultaFactory()

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

        return Object.keys(perServico).map(servico => {
            switch(servico) {
                case 'pesquisas':
                    return this._pesquisaConsultaFactory.toConsultaModel(perServico.pesquisas);

                default:
                    return this._pesquisaConsultaFactory.toConsultaModel(perServico.pesquisas);
            }
        })
    }
}

