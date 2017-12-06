import { Injectable } from '@angular/core';
import { localidades } from './localidades.lista';
import { Pais } from './localidade.model';

@Injectable()
export class LocalidadeService {

    getPaises() {
        return localidades.paises;
    }

    getPaisBySlug(slug: string): Pais | null {
        return this.getPaises().find(p => p.slug === slug) || null;
    }
}

