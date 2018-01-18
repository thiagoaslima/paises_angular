import { PesquisaConsulta } from "../pesquisas-service";
import { PesquisaConfiguration } from "../pesquisas-service/pesquisa-configuration.interface";

export type TipoServico = "pesquisas" | "conjunturais";

export interface Configuration {
    titulo: string;
    config: any;
};

export interface Consulta {
    servico: TipoServico;
    identificador: any;
};
