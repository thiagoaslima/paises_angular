import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './app-component/app.component';

@NgModule({
    imports: [
        AppModuleShared,
        ServerModule,
        ModuleMapLoaderModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
