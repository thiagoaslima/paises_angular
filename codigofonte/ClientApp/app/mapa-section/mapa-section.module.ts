import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, DecimalPipe, registerLocaleData } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import localePt from "@angular/common/locales/pt";
import localeEs from "@angular/common/locales/es";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { MapaMundiComponent } from "./mapa-mundi/mapa-mundi.component";
import { SinteseHomeComponent } from "./sintese-home/sintese-home.component";
import { RankingComponent } from "./ranking/ranking.component";
import { CompararComponent } from "./comparar/comparar.component";
import { SharedModule } from "../shared";
import { MapaSectionComponent } from "./mapa-section.component";
import { MapaSectionService } from "./mapa-section.service";
import { TranslateService } from "../translate/translate.service";
import { TranslateModule } from "../translate/translate.module";

const routes: Routes = [
    {
        path: "comparar/:indicador",
        component: CompararComponent
    },
    {
        path: "ranking/:pais",
        component: MapaSectionComponent
    },
    {
        path: "",
        component: MapaSectionComponent,
        children: [
            {
                path: ":pais",
                component: SinteseHomeComponent
            }
        ]
    }
];

registerLocaleData(localePt, "pt");
registerLocaleData(localeEs, "es");
export function getLocale(traducaoService: TranslateService) {
    return traducaoService.currentLanguage.id;
}

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        LeafletModule.forRoot(),
        TranslateModule
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
            deps: [TranslateService]
        },
        MapaSectionService,
        DecimalPipe
    ],
    entryComponents: [RankingComponent]
})
export class MapaSectionModule {}
