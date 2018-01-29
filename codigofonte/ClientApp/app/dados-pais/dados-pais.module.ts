import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared";
import { DadosPaisComponent } from "./dados-pais.component";
import { DadosPaisService } from "./dados-pais.service";

const routes: Routes = [
    {
        path: '',
        component: DadosPaisComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        DadosPaisComponent
    ],
    providers: [
        DadosPaisService
    ]
})
export class DadosPaisModule {

}