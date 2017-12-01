import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MapaMundiComponent } from './mapa-mundi.component';
import { HomeComponent } from '../home/home.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { IBGELeafletModule } from '../../components/ibge-leaflet/index';

const routes: Routes = [
    {
        path: '',
        component: MapaMundiComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LeafletModule.forRoot(),
        IBGELeafletModule.forRoot()
    ],
    declarations: [
        MapaMundiComponent,
        HomeComponent
    ],
    providers: []
})
export class MapaMundiModule { }
