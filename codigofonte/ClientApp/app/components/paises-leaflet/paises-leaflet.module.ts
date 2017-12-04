// This module encapsulates the custom directive
// that extends the @asymmetrik/ngx-leaflet directive

import { ModuleWithProviders, NgModule } from '@angular/core';

import { PaisesLeafletDirective } from './paises-leaflet.directive';

@NgModule({
    exports: [PaisesLeafletDirective],
    declarations: [PaisesLeafletDirective]
})
export class PaisesLeafletModule {

    static forRoot(): ModuleWithProviders {
        return { ngModule: PaisesLeafletModule, providers: [] };
    }

}