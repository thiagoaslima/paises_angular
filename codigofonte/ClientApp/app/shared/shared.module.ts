import { NgModule, ModuleWithProviders } from '@angular/core';

// const MODULES = [],
//     PIPES = [],
//     COMPONENTS = [],
//     PROVIDERS = []


@NgModule({
    imports: [
        // ...MODULES
    ],
    declarations: [
        // ...PIPES,
        // ...COMPONENTS
    ],
    exports: [
        // ...MODULES,
        // ...PIPES,
        // ...COMPONENTS
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // ...PROVIDERS
            ]
        };
    }
}