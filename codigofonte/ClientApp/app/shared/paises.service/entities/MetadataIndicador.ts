import { UnidadeIndicador } from "./UnidadeIndicador";

export class MetadataIndicador {

	public get id(): number {
		return this._id;
	}

	public get indicador(): string {
		return this._indicador;
	}

	public get unidade(): UnidadeIndicador {
		return this._unidade;
	}

	public get notas(): string[] {
		return this._notas;
	}

	public get fontes(): string[] {
		return this._fontes;
	}

	public get pai(): number  {
		return this._pai;
    }
    
    private _id: number;
    private _indicador: string;
    private _unidade: UnidadeIndicador;
    private _notas: string[];
    private _fontes: string[];
    private _pai: number;

    constructor(params: { 
        id: number,
        indicador: string,
        unidade: UnidadeIndicador,
        notas: string[],
        fontes: string[],
        pai?: number 
    }) {
        this._id = params.id;
        this._indicador = params.indicador;
        this._unidade = params.unidade;
        this._notas = params.notas;
        this._fontes = params.fontes;
        this._pai = params.pai ? params.pai : 0;
	}
    
}