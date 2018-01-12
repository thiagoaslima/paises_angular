import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared";
import { RankingComponent } from "./ranking.component";

const routes: Routes = [
    {
        path: '',
        component: RankingComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        RankingComponent
    ]
})
export class RankingModule {

}