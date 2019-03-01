import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { AnalyticsConfig } from './analytics.definitions';
import { AnalyticsService } from './analytics.service';
import { RouterModule } from '@angular/router';
import { NoopAnalyticsService } from './noop-analytics.service';

export const analyticsConfig = new InjectionToken<AnalyticsConfig>(
    'analyticsConfig'
);

@NgModule({
    imports: [RouterModule],
    providers: [],
})
export class AnalyticsModule {
    static forServer(config: AnalyticsConfig): ModuleWithProviders {
        return {
            ngModule: AnalyticsModule,
            providers: [
                {
                    provide: analyticsConfig,
                    useValue: config,
                },
                {
                    provide: AnalyticsService,
                    useClass: NoopAnalyticsService,
                },
            ],
        };
    }

    static forRoot(config: AnalyticsConfig): ModuleWithProviders {
        return {
            ngModule: AnalyticsModule,
            providers: [
                {
                    provide: analyticsConfig,
                    useValue: config,
                },
                AnalyticsService,
            ],
        };
    }
}
