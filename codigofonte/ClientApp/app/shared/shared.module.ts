import { NgModule, ModuleWithProviders, Injector, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises.service';
import { BuscaService } from './busca.service';

import { RouterParamsService } from './router-params.service';
import { LocalidadeService } from './localidade/localidade.service';
import { MalhaService } from './malha/malha.service';
import { PlatformDetectionService } from './platform-detection.service';

import { LogoODSComponent } from './logo-ods/logo-ods.component';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        LogoODSComponent,
        GraficoComponent
    ],
    exports: [
        LogoODSComponent,
        GraficoComponent
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