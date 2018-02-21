import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapaMundiComponent } from './mapa-mundi/mapa-mundi.component';
import { SinteseHomeComponent } from './sintese-home/sintese-home.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingModule } from './ranking/ranking.module';
import { SharedModule } from '../shared';
import { MapaSectionComponent } from './mapa-section.component';
import { RankingService } from './ranking/ranking.service';

const routes: Routes = [
    {
        path: '',
        component: MapaSectionComponent,
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
        MapaSectionComponent,
        MapaMundiComponent,
        SinteseHomeComponent
    ],
    providers: [
        RankingService
    ],
    entryComponents: [
        
    ]
})
export class MapaSectionModule { }
