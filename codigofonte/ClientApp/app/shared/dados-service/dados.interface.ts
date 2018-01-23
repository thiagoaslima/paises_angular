export interface EscopoConsulta {
    servico: string;
    id?: string | number;
    nome?: string;
}

export interface Configuration {
    titulo?: string;
    itens: ConfigurationItem[];
};

export interface ConfigurationItem {
    _id?: number;
    escopo: EscopoConsulta;
    identificador: any;
    views?: { componente: string }
};

export interface Consulta {
    escopo: EscopoConsulta;
    identificador: any
}

export interface Resposta {
    resultados: any[],
    metadata: any[]
}

export interface Resultado {
    id: number | string;
    valor?: number | string;
    periodo: string;
    localidade: string;
}

export interface MetadataResultado {
    id: number | string;
    indicador: string;
    unidade?: {
        identificador: string;
        classe: string;
        multiplicador: number;
    };
    notas: string[];
    fontes?: string[];
    pai?: MetadataResultado;
}

