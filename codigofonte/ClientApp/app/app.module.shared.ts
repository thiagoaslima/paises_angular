import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { CoreModule } from './core/core.module';
import { cases, values } from './shared/specialCases.value';
import { TranslateModule } from './translate/translate.module';
import { CacheService } from './shared/cache/cache.service';
import { CacheInterceptor } from './shared/cache/cache.interceptor';

@NgModule({
    declarations: [AppComponent],
    providers: [
        CacheService,
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
        { provide: 'SPECIAL_VALUES', useValue: { cases, values } },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CoreModule,
        AppRoutingModule,
        SharedModule.forRoot(),
        TranslateModule.forRoot({
            languages: [
                {
                    id: 'pt',
                    text: 'pt',
                    fullname: 'Português Brasileiro',
                    default: true,
                },
                {
                    id: 'en',
                    text: 'en',
                    fullname: 'English',
                },
                {
                    id: 'es',
                    text: 'es',
                    fullname: 'Español',
                },
            ],
            dictionaries: {
                pt: require('../locale/paises-pt.json'),
                en: require('../locale/paises-en.json'),
                es: require('../locale/paises-es.json'),
            },
            enableTracing: false,
        }),
    ],
})
export class AppModuleShared {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string
    ) {
        const platform = isPlatformBrowser(platformId)
            ? 'on the server'
            : 'in the browser';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
