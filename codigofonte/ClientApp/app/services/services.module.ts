import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { BuscaService } from './busca.service';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        PaisesService,
        PesquisasService,
        TraducaoService,
        BuscaService
    ],
})
export class ServicesModule { }
