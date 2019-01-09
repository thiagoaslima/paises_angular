import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BarraMenuPrincipalComponent } from "./barra-menu-principal/barra-menu-principal.component";
import { BarraGovComponent } from "./barra-gov/barra-gov.component";
import { SharedModule } from "../shared";
import { AlertComponent } from "./alert/alert.component";
import { TranslateModule } from "../translate/translate.module";

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule, TranslateModule],
    declarations: [
        AlertComponent,
        BarraGovComponent,
        BarraMenuPrincipalComponent
    ],
    exports: [AlertComponent, BarraGovComponent, BarraMenuPrincipalComponent],
    providers: []
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                "CoreModule is already loaded. Import it in the AppModule only"
            );
        }
    }
}
