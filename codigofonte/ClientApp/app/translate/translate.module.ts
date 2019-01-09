import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TranslateConfig } from "./translate.models";
import { TranslateService } from "./translate.service";
import { TranslatePipe } from "./translate.pipe";
import { RouterParamsService } from "../shared/router-params.service";

export const TranslateServiceConfig = new InjectionToken<TranslateConfig>(
    "TranslateServiceConfig"
);

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [TranslatePipe],
    exports: [TranslatePipe],
    providers: []
})
export class TranslateModule {
    static forRoot(config: TranslateConfig): ModuleWithProviders {
        return {
            ngModule: TranslateModule,
            providers: [
                {
                    provide: "TranslateServiceConfig",
                    useValue: config
                },
                TranslateService
                // {
                //     provide: TranslateService,
                //     useFactory: (
                //         config: TranslateConfig,
                //         activateRoute: ActivatedRoute,
                //         router: Router
                //     ) => new TranslateService(config, activateRoute, router),
                //     deps: [TranslateServiceConfig, ActivatedRoute, Router]
                // }
            ]
        };
    }
}
