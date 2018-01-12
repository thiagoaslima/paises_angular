import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapaMundiComponent } from './mapa-mundi/mapa-mundi.component';
import { SinteseHomeComponent } from './sintese-home/sintese-home.component';
import { SharedModule } from '../shared';

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
        SinteseHomeComponent
    ],
    providers: [
        
    ],
    entryComponents: [
        
    ]
})
export class MapaSectionModule { }
