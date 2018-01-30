import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarraMenuPrincipalComponent } from "./barra-menu-principal/barra-menu-principal.component";
import { BarraGovComponent } from "./barra-gov/barra-gov.component";
import { SharedModule } from "../shared";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        BarraGovComponent,
        BarraMenuPrincipalComponent
    ],
    exports: [
        BarraGovComponent,
        BarraMenuPrincipalComponent
    ],
    providers: [
    ]
})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}
