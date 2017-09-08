import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        PaisesService,
        PesquisasService
    ],
})
export class ServicesModule { }
