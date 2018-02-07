import { IResultadosIndicador } from "../interfaces";

export class ResultadosIndicador implements IResultadosIndicador {

    static toResultadoModel(params: Array<{
        id: number,
        res: Array<{
            localidade: string,
            res: { [periodo: string]: any }
        }>
    }>): Array<{ id: number, localidade: string, valores: string[], periodos: string[] }> {
        let resultados = [];

        for (const param of params) {
            const id = param.id;

            for (const obj of param.res) {
                const localidade = obj.localidade;

                const periodosValidos = Object.keys(obj.res)
                    .filter(periodo => Boolean(obj.res[periodo]))
                    .sort();
                const valoresValidos = periodosValidos
                    .map(periodo => ResultadosIndicador.converterValoresEspeciais(obj.res[periodo]));

                resultados.push({
                    id,
                    localidade,
                    valores: valoresValidos,
                    periodos: periodosValidos
                });
            }
        }

        return resultados;
    }

    static converterValoresEspeciais(valor: string) {
        switch (valor) {
            // indeterminados
            case "99999999999999":
            case "99999999999998":
                return "-";

            default:
                return valor;
        }
    }

    public get id() {
        return this._id;
    }

    public get localidade() {
        return this._localidade;
    }

    public get valores() {
        return this._valores;
    }

    public get valorMaisRecente() {
        return this._valores[0];
    }

    public get periodos() {
        return this._periodos;
    }

    public get periodoMaisRecente() {
        return this._periodos[0];
    }

    private _id: number;
    private _localidade: string;
    private _valores: string[];
    private _periodos: string[];

    constructor(params: {
        id: number,
        localidade: string,
        valores: string[],
        periodos: string[]
    }) {
        this._id = params.id;
        this._localidade = params.localidade;
        this._valores = params.valores;
        this._periodos = params.periodos;
    }

    getValores(periodos: string[]): Array<string | undefined> {
        return periodos
            .map(periodo => this._periodos.indexOf(periodo))
            .map(idx => idx >= 0 ? this._valores[idx] : undefined);
    }

    getValor(periodo: string): string | undefined {
        return this.getValores([periodo])[0];
    }
}