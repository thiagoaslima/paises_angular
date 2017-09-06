import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxComponent } from './sandbox.component';

export const ROUTES: Routes = [
    { path: '', component: SandboxComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        SandboxComponent
    ]
})
export class SandboxModule {

}