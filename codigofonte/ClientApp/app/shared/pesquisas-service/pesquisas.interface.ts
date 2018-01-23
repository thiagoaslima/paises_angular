import { Pesquisa } from "./pesquisa.model";

interface AbrangenciaTerritorial {
    label: string,
    codeLength: number
}

interface Map<T>{
    [key: string]: T
}

export interface AbrangenciasTerritoriais extends Map<AbrangenciaTerritorial>{
    paises: AbrangenciaTerritorial, 
    pais: AbrangenciaTerritorial,
    macrorregiao: AbrangenciaTerritorial,
    uf: AbrangenciaTerritorial,
    ufSub: AbrangenciaTerritorial,
    municipio: AbrangenciaTerritorial,
    municipioSub: AbrangenciaTerritorial
}

export const abrangenciasTerritoriais: {[key: string]: AbrangenciaTerritorial} = {
    paises: {
        label: "paises",
        codeLength: 2
    },
    pais: {
        label: "pais",
        codeLength: 1
    },
    macrorregiao: {
        // regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul
        label: "macrorregiao",
        codeLength: 1
    },
    uf: {
        label: "uf",
        codeLength: 2
    },
    ufSub: {
        // ?
        label: "ufSub",
        codeLength: 4
    },
    municipio: {
        label: "municipio",
        codeLength: 6
    },
    municipioSub: {
        // ?
        label: "municipioSub",
        codeLength: 8
    },
}

export const listaAbrangenciasTerritoriais = Object.keys(abrangenciasTerritoriais).map(key => abrangenciasTerritoriais[key].label);

export interface PesquisaResposta {
    pesquisa: Pesquisa,
    resultados: PesquisaResultado[],
    metadata: PesquisaMetadataResultado[]
}

export interface PesquisaResultado {
    id: number | string;
    valor?: number | string;
    periodo: string;
    localidade: string;
}

export interface PesquisaMetadataResultado {
    id: number | string;
    indicador: string;
    unidade?: {
        identificador: string;
        classe: string;
        multiplicador: number;
    };
    notas: string[];
    fontes: string[];
    pai?: PesquisaMetadataResultado;
}