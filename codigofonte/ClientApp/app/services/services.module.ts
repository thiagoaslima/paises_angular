import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { BuscaService } from './busca.service';
import { LocalidadeService } from './localidade.service';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        PaisesService,
        PesquisasService,
        TraducaoService,
        BuscaService,
        LocalidadeService
    ],
})
export class ServicesModule { }
