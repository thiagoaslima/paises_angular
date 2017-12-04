import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MapaMundiComponent } from './mapa-mundi.component';
import { SinteseHomeComponent } from '../sintese-home/sintese-home.component';
import { HomeComponent } from '../home/home.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { PaisesLeafletModule } from '../../components/paises-leaflet/index';

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
        RouterModule.forChild(routes),
        LeafletModule.forRoot(),
        PaisesLeafletModule.forRoot()
    ],
    declarations: [
        MapaMundiComponent,
        HomeComponent
    ],
    providers: []
})
export class MapaMundiModule { }
