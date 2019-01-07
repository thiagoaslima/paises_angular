import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
import { TranslateConfig } from "./translate.models";
import { TranslateService } from "./translate.service";
import { TranslatePipe } from "./translate.pipe";
import { HttpClientModule } from "@angular/common/http";

export const TranslateServiceConfig = new InjectionToken<TranslateConfig>(
  "TranslateServiceConfig"
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TranslatePipe],
  exports: [TranslatePipe],
  providers: [TranslateService]
})
export class TranslateModule {
  static forRoot(config: TranslateConfig): ModuleWithProviders {
    return {
      ngModule: TranslateModule,
      providers: [
        {
          provide: TranslateServiceConfig,
          useValue: config
        },
        TranslateService,
      ]
    };
  }
}
