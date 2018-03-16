export type tipo_localidade = 'pais' | 'regiao' | 'subregiao' | 'continente';

export interface Localidade {
    tipo: tipo_localidade;
    slug: string;
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
    sigla: string;
    sigla3: string;
    parents: {
        continente: string;
        regiao: string;
        subregiao: string;
    };
}
