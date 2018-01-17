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
    fontes: string[];
    pai?: MetadataResultado;
}