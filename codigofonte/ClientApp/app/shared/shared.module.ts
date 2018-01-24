import { NgModule, ModuleWithProviders, Injector, Inject, PLATFORM_ID } from '@angular/core';

import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { BuscaService } from './busca.service';

import { RouterParamsService } from './router-params.service';
import { LocalidadeService } from './localidade/localidade.service';
import { MalhaService } from './malha/malha.service';
import { PlatformDetectionService } from './platformDetection/platform-detection.service';

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
                PaisesService,
                PesquisasService,
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