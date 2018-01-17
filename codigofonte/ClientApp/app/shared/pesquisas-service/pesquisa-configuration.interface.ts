import { 
    Configuration,
    Consulta, 
    TipoServico
} from "../paises-service";

export interface PesquisaConfiguration extends Configuration {
    titulo: string,
    config: Array<PesquisaConfigurationConfig>
}

export interface PesquisaConfigurationConfig extends Consulta {
    servico: TipoServico,
    identificador: {
        pesquisaId: string,
        indicadorId: string,
        localidadeId: string
    },
    componente?: string
}

