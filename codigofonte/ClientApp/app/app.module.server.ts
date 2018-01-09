import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './app-component/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        AppModuleShared,
        ServerModule,
        ModuleMapLoaderModule
    ]
})
export class AppModule {
}
