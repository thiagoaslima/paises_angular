import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './app-component/app.component';
import { AnalyticsModule } from './shared/google-analytics/analytics.module';

@NgModule({
    imports: [
        AppModuleShared,
        ServerModule,
        ModuleMapLoaderModule,
        AnalyticsModule.forServer({ key: 'UA-285486-1' }),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
