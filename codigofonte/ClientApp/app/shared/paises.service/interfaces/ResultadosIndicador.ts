export interface IResultadosIndicador {
    id: number;
    localidade: string;
    valores: string[];
    valorMaisRecente: string;
    periodos: string[];
    periodoMaisRecente: string;

    getValores(periodos: string[]): Array<string | undefined>;
    getValor(periodo: string): string | undefined;   
}