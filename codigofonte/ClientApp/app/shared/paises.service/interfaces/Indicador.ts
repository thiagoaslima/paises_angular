import { IResultadosIndicador } from "./ResultadosIndicador";

export interface IIndicador {
    id: number;
	indicador: string;
	unidade: string;
    unidadeIndetificador: string;
	notas: string[];
	fontes: string[];
    pai: number;
    
    getResultado(siglaLocalidade: string): IResultadosIndicador | null
}