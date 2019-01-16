import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TranslateConfig } from './translate.models';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { TranslateInterceptor } from './translate.interceptor';

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
          provide: 'TranslateServiceConfig',
          useValue: config
        },
        TranslateService,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: TranslateInterceptor,
        //   multi: true
        // }
      ]
    };
  }
}
