import { TemaComponent } from './tema/tema.component';
import { TabelaComponent } from './tabela.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxComponent } from './sandbox.component';

export const ROUTES: Routes = [
    { path: '', component: SandboxComponent }
];

export const COMPONENTS = [
    SandboxComponent,
    TabelaComponent,
    TemaComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        ...COMPONENTS
    ]
})
export class SandboxModule {

}