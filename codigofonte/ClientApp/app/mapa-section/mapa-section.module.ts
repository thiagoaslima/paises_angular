import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, registerLocaleData } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import localeEs from '@angular/common/locales/es';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapaMundiComponent } from './mapa-mundi/mapa-mundi.component';
import { SinteseHomeComponent } from './sintese-home/sintese-home.component';
import { RankingComponent } from './ranking/ranking.component';
import { CompararComponent } from './comparar/comparar.component';
import { SharedModule, TraducaoService } from '../shared';
import { MapaSectionComponent } from './mapa-section.component';
import { MapaSectionService } from './mapa-section.service';

const routes: Routes = [
    {
        path: 'comparar/:indicador',
        component: CompararComponent
    },
    {
        path: 'ranking/:pais',
        component: MapaSectionComponent
    },
    {
        path: '',
        component: MapaSectionComponent,
        children: [
            {
                path: ':pais',
                component: SinteseHomeComponent
            },
        ]
    },
    // {
    //     path: '',
    //     component: MapaSectionComponent,
    //     children: [
    //         {
    //             path: 'ranking/:pais',
    //             // component: null
    //         },
    //         {
    //             path: 'ranking/:indicador/:pais',
    //             // component: null
    //         },
    //         {
    //             path: 'comparar',
    //             component: CompararComponent
    //         },
    //         {
    //             path: ':pais',
    //             component: SinteseHomeComponent
    //         },
    //     ]
    // }
];

registerLocaleData(localePt, 'pt');
registerLocaleData(localeEs, 'es');
export function getLocale(traducaoService: TraducaoService) {
    return traducaoService.lang;
}

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        LeafletModule.forRoot()
    ],
    declarations: [
        RankingComponent,
        CompararComponent,
        MapaSectionComponent,
        MapaMundiComponent,
        SinteseHomeComponent
    ],
    providers: [
        {
            provide: LOCALE_ID, 
            useFactory: getLocale,
            deps: [TraducaoService]
        },
        MapaSectionService,
        DecimalPipe
    ],
    entryComponents: [
        RankingComponent
    ]
})
export class MapaSectionModule { }
