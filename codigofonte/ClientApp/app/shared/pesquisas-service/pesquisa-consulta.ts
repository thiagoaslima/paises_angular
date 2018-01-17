import { PesquisaConfigurationConfig } from "./pesquisa-configuration.interface";
import { Consulta } from "../paises-service";

export class PesquisaConsulta implements Consulta {
    public servico: "pesquisas";

    public get identificador() {
        return {
            pesquisaId: this._pesquisaId,
            indicadorId: this._indicadoresId.join('|'),
            localidadeId: this._localidadesId.join('|')
        }
    }

    private _pesquisaId: string = "";
    private _indicadoresId = <string[]>[];
    private _localidadesId = <string[]>[];

    constructor(
        dados?: PesquisaConfigurationConfig
    ) {

        if (dados) {
            let { pesquisaId, indicadorId, localidadeId } = dados.identificador;

            this._pesquisaId = pesquisaId;
            this._indicadoresId.push(indicadorId);
            this._localidadesId.push(localidadeId);
        }
    }

    addIdentificador(config: PesquisaConfigurationConfig) {
        let { pesquisaId, indicadorId, localidadeId } = config.identificador;

        if (!this._pesquisaId) {
            this._pesquisaId = pesquisaId;
        }

        if (this._pesquisaId !== pesquisaId) {
            throw new Error('PesquisaConsulta já possui uma pesquisaId, diferente da passada');
        }

        this._indicadoresId.push(indicadorId);
        this._localidadesId.push(localidadeId);
    }

}