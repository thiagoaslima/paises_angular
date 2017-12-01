// This module encapsulates the custom directive
// that extends the @asymmetrik/ngx-leaflet directive

import { ModuleWithProviders, NgModule } from '@angular/core';

import { IBGELeafletDirective } from './ibge-leaflet.directive';

@NgModule({
    exports: [IBGELeafletDirective],
    declarations: [IBGELeafletDirective]
})
export class IBGELeafletModule {

    static forRoot(): ModuleWithProviders {
        return { ngModule: IBGELeafletModule, providers: [] };
    }

}