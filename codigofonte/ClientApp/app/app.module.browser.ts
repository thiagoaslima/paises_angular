import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './app-component/app.component';
import { AnalyticsModule } from './shared/google-analytics/analytics.module';

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

@NgModule({
    imports: [
        AppModuleShared,
        BrowserModule.withServerTransition({ appId: 'ibge-paises' }),
        AnalyticsModule.forRoot({ key: 'UA-285486-1' }),
    ],
    providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }],
    bootstrap: [AppComponent],
})
export class AppModule {}
