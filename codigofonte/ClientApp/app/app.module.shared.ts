import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';

import { BarraGovComponent } from './core/barra-gov/barra-gov.component';
import { BarraMenuPrincipalComponent } from './core/barra-menu-principal/barra-menu-principal.component';
import { CoreModule } from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,
        BarraGovComponent,
        BarraMenuPrincipalComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        SharedModule.forRoot()
    ]
})
export class AppModuleShared {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ?
            'on the server' : 'in the browser';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
