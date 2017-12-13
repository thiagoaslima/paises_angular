import { NgModule, SkipSelf, Optional, ModuleWithProviders } from '@angular/core';

import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { BuscaService } from './busca.service';

import { RouterParamsService } from './router-params.service';
import { LocalidadeService } from './localidade/localidade.service';
import { MalhaService } from './malha/malha.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        TraducaoService,
        BuscaService,
        MalhaService
    ]
})
export class ServicesModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [
                RouterParamsService,
                LocalidadeService,
                PaisesService,
                PesquisasService
            ]
        };
    }
    constructor( @Optional() @SkipSelf() parentModule: ServicesModule) {
        // if (parentModule) {
        //     throw new Error(
        //         'ServicesModule is already loaded. Import it in the AppModule only');
        // }
    }

}
