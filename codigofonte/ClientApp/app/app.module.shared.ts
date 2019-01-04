import { NgModule, Inject, PLATFORM_ID, APP_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app-component/app.component";
import { CoreModule } from "./core/core.module";
import { cases, values } from "./shared/specialCases.value";

@NgModule({
    declarations: [AppComponent],
    providers: [{ provide: "SPECIAL_VALUES", useValue: { cases, values } }],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CoreModule,
        AppRoutingModule,
        SharedModule.forRoot()
    ]
})
export class AppModuleShared {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string
    ) {
        const platform = isPlatformBrowser(platformId)
            ? "on the server"
            : "in the browser";
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
