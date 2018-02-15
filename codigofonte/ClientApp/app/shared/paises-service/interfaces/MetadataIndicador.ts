export interface MetadataIndicador {
    id: number;
    indicador: string;
    unidade: {
        identificador: string,
        classe: string,
        multiplicador: number
    },
    notas: string[],
    fontes: string[],
    pai: number
}