import { Injectable } from '@angular/core';
import { localidades } from './localidades.lista';
import { Pais } from './localidade.model';

const PAISES_BY_ID = localidades.paises.reduce((agg, pais) => {
    agg[pais.slug] = pais;
    return agg;
}, <{ [slug: string]: Pais }>{});

@Injectable()
export class LocalidadeService {

    public getAllPaises() {
        return localidades.paises;
    }

    public getByDDI(ddi: string): Pais | null {
        return this.getAllPaises().find(pais => pais.ddi === ddi) || null;
    }
    public getPaisBySlug(slug: string): Pais | null {
        return PAISES_BY_ID[slug] || null;
    }

    public getPaisBySigla(sigla: string): Pais | null {
        let property = (sigla.length === 2) ? 'sigla' : 'sigla3';
        return this.getAllPaises().find((pais: Pais) => pais[<'sigla' | 'sigla3'>property] === sigla) || null;
    }
}

