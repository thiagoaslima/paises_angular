import { NgModule, ModuleWithProviders, Injector, Inject, PLATFORM_ID } from '@angular/core';

import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { BuscaService } from './busca.service';

import { RouterParamsService } from './router-params.service';
import { LocalidadeService } from './localidade/localidade.service';
import { MalhaService } from './malha/malha.service';
import { PlatformDetectionService } from './platform-detection.service';
import { PaisesFacadeModule } from './paises-service/paises-facade.module';
import { PesquisasAdapter } from './paises-service/adapters/pesquisas-adapter.service';
import { PaisesFacadeService } from './paises-service/paises-service';

@NgModule({
    imports: [
        
    ],
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
                PaisesService,
                PesquisasService,
                PaisesFacadeService,
                PesquisasAdapter,
                {
                    provide: PlatformDetectionService,
                    deps: [PLATFORM_ID],
                    useFactory: (platform_id: Object) => {
                        return new PlatformDetectionService(platform_id);
                    }
                }
            ]
        };
    }
}