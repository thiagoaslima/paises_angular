export class UnidadeIndicador {
    
    public get identificador() {
        return this._identificador;
    }
    public get classe() {
        return this._classe;
    }
    public get multiplicador() {
        return this._multiplicador;
    }

    private _identificador: string;
    private _classe: string;
    private _multiplicador: number;
    private _longTerm: string;

    constructor(unidade?: {id: string, classe: string, multiplicador: number}) {
        this._identificador = unidade && unidade.id ? unidade.id : "";
        this._classe = unidade && unidade.classe ? unidade.classe : "";
        this._multiplicador = unidade && unidade.multiplicador ? unidade.multiplicador : 1;

        let suffix = this.multiplicador && this.multiplicador > 1 ? `(${this.multiplicador})` : "";
        this._longTerm = [this._identificador, suffix].join(" ");
    }

    toString() {
        return this._longTerm;
    }
}