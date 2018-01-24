export interface Configuration {
    titulo?: string;
    dados: Consulta[];
    exibicao?: {
        componente: string
    }
}

export interface Consulta {
    escopo: EscopoConsulta;
    identificador: any
}

export interface EscopoConsulta {
    servico: string;
    id?: string | number;
    nome?: string
}