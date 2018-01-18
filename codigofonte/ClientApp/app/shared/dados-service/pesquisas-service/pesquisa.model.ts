import { arrayUniqueValues } from '../../../../utils';
import { AbrangenciasTerritoriais, listaAbrangenciasTerritoriais, abrangenciasTerritoriais } from './pesquisas.interface';

export class Pesquisa {
    static get niveisTerritoriaisPossiveis() {
        return listaAbrangenciasTerritoriais.slice(0);
    }

    public readonly id: number
    public readonly nome: string
    public readonly descricao: string
    public readonly observacao: string
    public readonly periodos: Array<{
        nome: string,
        dataPublicacao: Date,
        fontes: string[],
        notas: string[]
    }>
    public readonly contextos: { [nivelTerritorial: string]: boolean }

    constructor(dados: any) {
        this.id = dados.id;
        this.nome = dados.nome;
        this.descricao = dados.descricao || "";
        this.observacao = dados.observacao || "";
        this.periodos = this._setPeriodos(dados.periodos);
        this.contextos = this._setContextos(Number.parseInt(dados.contexto, 10));
    }

    abrangeNivelTerritorial(contexto: string) {
        return this.contextos[contexto];
    }

    getAbrangenciaTerritorialDaPesquisa(): string[] {
        return Pesquisa.niveisTerritoriaisPossiveis.filter(contexto => Boolean(this.contextos[contexto]));
    }

    getAllFontes() {
        const fontes = this.periodos.reduce((fontes, periodo) => fontes.concat(periodo.fontes), [] as string[]);
        return arrayUniqueValues(fontes);
    }

    getFontesDoPeriodo(periodo: string) {
        const obj = this.periodos.find(_periodo => _periodo.nome === periodo);
        return obj ? obj.fontes : [];
    }

    getAllNotas() {
        const notas = this.periodos.reduce((notas, periodo) => notas.concat(periodo.notas), [] as string[]);
        return arrayUniqueValues(notas);
    }

    getNotasDoPeriodo(periodo: string) {
        const obj = this.periodos.find(_periodo => _periodo.nome === periodo);
        return obj ? obj.notas : [];
    }

    private _setContextos(binario: number) {
        const contextos = Boolean(binario)
            ? binario.toString()
                .split('')
                .reverse()
                .map(str => Number.parseInt(str))
            : [];

        const len = contextos.length;
        contextos.length = 6;
        contextos.fill(0, len);
        contextos.reverse();

        return Pesquisa.niveisTerritoriaisPossiveis.reduce((acc, propertyName, index) => {
            acc[propertyName] = Boolean(contextos[index]);
            return acc;
        }, {} as {[key: string]: boolean});
    }

    private _setPeriodos(periodos: any) {
        return periodos.map((periodo: any) => {
            const nome = periodo.periodo;
            const fontes = periodo.fonte;
            const notas = periodo.nota;
            let dataPublicacao = null;

            if (periodo.publicacao) {
                const [data, horario] = periodo.publicacao.split(' ');
                const [dia, mes, ano] = data.split('/').map((value: string) => Number.parseInt(value, 10));
                const [hora, minuto, segundo] = horario.split(':').map((value: string) => Number.parseInt(value, 10));
                dataPublicacao = new Date(Date.UTC(ano, mes - 1, dia, hora, minuto, segundo));
            }

            return {
                nome,
                dataPublicacao,
                fontes,
                notas
            };
        })
    }
}