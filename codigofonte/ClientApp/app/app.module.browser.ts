import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './app-component/app.component';

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'ibge-paises' }),
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
