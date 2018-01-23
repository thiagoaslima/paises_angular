import { PesquisaConfiguration, PesquisaConfigurationConfig } from "./pesquisa-configuration.interface";
import { PesquisaConsulta } from "./pesquisa-consulta";

export class PesquisaConsultaFactory {

    public buildkey(consulta: PesquisaConfigurationConfig) {
        const servico = consulta.servico;
        const { pesquisaId } = consulta.identificador;

        return `${servico}-${pesquisaId}`;
    }

    toConsultaModel(configuration: PesquisaConfiguration | PesquisaConfiguration[]): PesquisaConsulta[] {
        configuration = Array.isArray(configuration) ? configuration : [configuration];
        const consultasObject = {} as { [key: string]: PesquisaConsulta };

        configuration.forEach(obj => {

            obj.config.forEach(descriptor => {
                let key = this.buildkey(descriptor);

                if (!consultasObject[key]) {
                    consultasObject[key] = new PesquisaConsulta(descriptor);
                } else {
                    consultasObject[key].addIdentificador(descriptor);
                }
            });
        })

        return Object.values(consultasObject);
    }

}

