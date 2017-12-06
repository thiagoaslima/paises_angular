export type tipo_localidade = 'pais' | 'regiao' | 'subregiao' | 'continente';

export interface Localidade {
    tipo: tipo_localidade;
    codigo: string;
    nome: {
        en: string;
        es: string;
        pt: string;
    };
    parent: string;
}

export interface Pais extends Localidade {
    tipo: 'pais';
    codigo: string;
    sigla: string;
    sigla3: string;
    slug: string;
    nome: {
        en: string;
        es: string;
        pt: string;
    };
    parent: string;
    parents: {
        continente: string;
        regiao: string;
        subregiao: string;
    };
    ddi: string;
}
