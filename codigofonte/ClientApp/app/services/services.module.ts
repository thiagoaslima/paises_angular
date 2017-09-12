import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        PaisesService,
        PesquisasService,
        TraducaoService
    ],
})
export class ServicesModule { }
