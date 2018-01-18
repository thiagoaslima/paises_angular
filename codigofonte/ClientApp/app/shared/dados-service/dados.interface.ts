export interface EscopoConsulta {
    servico: string
    id?: string | number,
    nome?: string,
}

export interface Configuration {
    titulo?: string;
    itens: Consulta[];
};

export interface Consulta {
    escopo: EscopoConsulta;
    identificador: any;
    views?: Array<{ componente: string }>
};

export interface Resposta {
    resultados: Resultado[],
    metadata: MetadataResultado[]
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

