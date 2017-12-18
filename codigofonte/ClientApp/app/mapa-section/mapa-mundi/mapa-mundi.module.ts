import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapaMundiComponent } from './mapa-mundi.component';
import { SinteseHomeComponent } from '../sintese-home/sintese-home.component';
import { SharedModule } from '../../shared';
import { ItemTemaComponent } from "../../sandbox/componentes/item-tema.component";
import { ItemTemaDirective } from "../../sandbox/componentes/item-tema.host";
import { TabelaComponent } from "../../sandbox/componentes/tabela.component";

const routes: Routes = [
    {
        path: '',
        component: MapaMundiComponent,
        children: [
            {
                path: ':pais',
                component: SinteseHomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        LeafletModule.forRoot()
    ],
    declarations: [
        MapaMundiComponent,
        SinteseHomeComponent,
        ItemTemaComponent,
        ItemTemaDirective,
        TabelaComponent
    ],
    providers: [
        
    ],
    entryComponents: [
        TabelaComponent
    ]
})
export class MapaMundiModule { }
