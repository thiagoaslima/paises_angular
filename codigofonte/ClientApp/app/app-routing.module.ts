import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './home/home.module#HomeModule' },
  { path: 'mapa', loadChildren: './mapa-section/mapa-mundi/mapa-mundi.module#MapaMundiModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
