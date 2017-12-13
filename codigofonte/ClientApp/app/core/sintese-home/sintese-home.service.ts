import { Injectable, Inject } from '@angular/core';
import { ListaComponent } from "../../sandbox/componentes/lista.component";

import { SinteseHomeConfig } from './sintese-home.config'

@Injectable()
export class SinteseHomeService {

    public indicadores = SinteseHomeConfig

    constructor(
        
    ) { }

    getSintese(localidadeId: string) {

    }
}