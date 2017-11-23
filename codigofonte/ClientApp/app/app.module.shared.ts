import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { BarraGovComponent } from './core/barra-gov/barra-gov.component';
import { BarraMenuPrincipalComponent } from './core/barra-menu-principal/barra-menu-principal.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        BarraGovComponent,
        BarraMenuPrincipalComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ServicesModule,
        AppRoutingModule
    ]
})
export class AppModuleShared {
}
