export interface Resultado {
    id: number | string;
    valorMaisRecente?: number | string;
    periodoMaisRecente: string;
    localidade: string;
    valores?: Array<number | string>,
    periodos: string[]
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