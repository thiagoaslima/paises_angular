import { ItemTemaDirective } from './componentes/item-tema.host';
import { ItemTemaComponent } from './componentes/item-tema.component';
import { ListaComponent } from './componentes/lista.component';
import { TemaComponent } from './tema/tema.component';
import { TabelaComponent } from './componentes/tabela.component';
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
    ListaComponent,
    TemaComponent,
    ItemTemaComponent,
    ItemTemaDirective
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [ TabelaComponent, ListaComponent ]
})
export class SandboxModule {

}