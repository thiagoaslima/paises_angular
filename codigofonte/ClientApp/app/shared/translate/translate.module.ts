import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
import { TranslateConfig } from "./translate.models";
import { TranslateService } from "./translate.service";

export const TranslateServiceConfig = new InjectionToken<TranslateConfig>(
    "TranslateServiceConfig"
);

@NgModule({
    imports: [CommonModule],
    declarations: [],
    entryComponents: [],
    exports: [],
    providers: []
})
export class TranslateModule {
    static forRoot(config: TranslateConfig): ModuleWithProviders {
        return {
            ngModule: TranslateModule,
            providers: [
                TranslateService,
                {
                    provide: TranslateServiceConfig,
                    useValue: config
                }
            ]
        };
    }
}
