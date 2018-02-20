import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapaMundiComponent } from './mapa-mundi/mapa-mundi.component';
import { SinteseHomeComponent } from './sintese-home/sintese-home.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingModule } from './ranking/ranking.module';
import { SharedModule } from '../shared';

const routes: Routes = [
    {
        path: '',
        component: MapaMundiComponent,
        children: [
            {
                path: 'ranking/:indicador',
                component: RankingComponent
            },
            {
                path: 'ranking/:indicador/:pais',
                component: RankingComponent
            },
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
        LeafletModule.forRoot(),
        RankingModule
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
