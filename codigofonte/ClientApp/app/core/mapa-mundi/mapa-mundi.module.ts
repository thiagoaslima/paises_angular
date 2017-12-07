import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapaMundiComponent } from './mapa-mundi.component';
import { SinteseHomeComponent } from '../sintese-home/sintese-home.component';
import { ServicesModule } from '../../services/services.module';
import { MalhaService } from '../../services/malha/malha.service';
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
        PaisesLeafletModule.forRoot(),
        ServicesModule
    ],
    declarations: [
        MapaMundiComponent,
        SinteseHomeComponent
    ],
    providers: [
        // MalhaService
    ]
})
export class MapaMundiModule { }
