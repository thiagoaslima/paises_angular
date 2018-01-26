import { NgModule, ModuleWithProviders, Injector } from '@angular/core';

import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { BuscaService } from './busca.service';

import { RouterParamsService } from './router-params.service';
import { LocalidadeService } from './localidade/localidade.service';
import { MalhaService } from './malha/malha.service';

import { LogoODSComponent } from './logo-ods/logo-ods.component';

@NgModule({
    imports: [],
    declarations: [
        LogoODSComponent
    ],
    exports: [
        LogoODSComponent
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
                PaisesService,
                PesquisasService
            ]
        };
    }
}