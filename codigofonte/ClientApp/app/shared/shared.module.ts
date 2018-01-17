import { NgModule, ModuleWithProviders, Injector } from '@angular/core';

import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas-service';
import { PaisesService, ConsultaService } from './paises-service';
import { BuscaService } from './busca.service';

import { RouterParamsService } from './router-params.service';
import { LocalidadeService } from './localidade/localidade.service';
import { MalhaService } from './malha/malha.service';

@NgModule({
    imports: [],
    declarations: [
        
    ],
    exports: [
        
    ],
    providers: [
        TraducaoService,
        BuscaService,
        MalhaService
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        

        return {
            ngModule: SharedModule,
            providers: [
                RouterParamsService,
                LocalidadeService,
                ConsultaService,
                PaisesService,
                PesquisasService
            ]
        };
    }
}