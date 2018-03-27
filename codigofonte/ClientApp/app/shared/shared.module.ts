import { NgModule, ModuleWithProviders, Injector, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraducaoService } from './traducao.service';
import { PesquisasService } from './pesquisas.service';
import { PaisesService } from './paises-service';
import { BuscaService } from './busca.service';

import { RouterParamsService } from './router-params.service';
import { LocalidadeService } from './localidade/localidade.service';
import { MalhaService } from './malha/malha.service';
import { PlatformDetectionService } from './platform-detection.service';

import { LogoODSComponent } from './logo-ods/logo-ods.component';
import { GraficoComponent } from './grafico/grafico.component';

import { ResultadoPipe } from './resultado.pipe';
import { L10NPipe } from './l10n.pipe';


export function platformDetectionFactory(platform_id: Object) {
    return new PlatformDetectionService(platform_id.toString());
}
@NgModule({
    imports: [CommonModule],
    declarations: [
        LogoODSComponent,
        GraficoComponent,
        ResultadoPipe,
        L10NPipe
    ],
    exports: [
        LogoODSComponent,
        GraficoComponent,
        ResultadoPipe,
        L10NPipe
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
                PlatformDetectionService
            ]
        };
    }
}