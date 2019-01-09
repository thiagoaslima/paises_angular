import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { SharedModule } from "../shared";
import { TranslateModule } from "../translate/translate.module";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent],
    providers: []
})
export class HomeModule {}
