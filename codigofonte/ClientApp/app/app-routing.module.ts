import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    isPaisGuard,
    isPaisOnuGuard,
    isIndicadorGuard,
    RouteParametersGuard,
} from './app-guards';
import { AppComponent } from './app-component/app.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'mapa',
        loadChildren: './mapa-section/mapa-section.module#MapaSectionModule',
    },
    {
        path: 'dados/:pais',
        children: [
            {
                path: '',
                loadChildren: './dados-pais/dados-pais.module#DadosPaisModule',
            },
        ],
        canActivate: [isPaisOnuGuard],
    },
    // {
    //   path: ':indicadorORpais',
    //   pathMatch: 'full',
    //   canActivate: [RouteParametersGuard],
    //   component: AppComponent
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, enableTracing: false }),
    ],
    exports: [RouterModule],
    providers: [
        isPaisGuard,
        isPaisOnuGuard,
        isIndicadorGuard,
        RouteParametersGuard,
    ],
})
export class AppRoutingModule {}
