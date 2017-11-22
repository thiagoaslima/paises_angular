import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MapaMundiComponent } from './mapa-mundi.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
        path: '',
        component: MapaMundiComponent,
        children: [
            { path: '', pathMatch: 'full', component: HomeComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MapaMundiComponent,
        HomeComponent
    ],
    providers: []
})
export class MapaMundiModule { }
