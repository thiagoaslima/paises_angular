import { MetadataIndicador } from "./MetadataIndicador";
import { ResultadosIndicador } from './ResultadosIndicador';
import { IIndicador } from "../interfaces/Indicador";
import { Localidade } from "../../localidade/localidade.model";
import { IResultadosIndicador } from "../interfaces/ResultadosIndicador";

export class Indicador implements IIndicador {

	public get id(): number {
		return this._metadata.id;
	}

	public get indicador(): string {
		return this._metadata.indicador;
	}

	public get unidade(): string {
		return this._metadata.unidade.toString();
	}

	public get unidadeIndetificador(): string {
		return this._metadata.unidade.identificador;
	}

	public get notas(): string[] {
		return this._metadata.notas;
	}

	public get fontes(): string[] {
		return this._metadata.fontes;
	}

	public get pai(): number {
		return this._metadata.pai;
	}

	private _metadata: MetadataIndicador;
	private _resultados: ResultadosIndicador[];

	constructor(
		metadata: MetadataIndicador,
		resultados?: ResultadosIndicador[]
	) {
		this._metadata = metadata;
		this._resultados = resultados || [];
	}

	getResultado(siglaLocalidade: string): ResultadosIndicador | null {
		return this._resultados.find(resultado => resultado.localidade === siglaLocalidade) || null;
	}

}