import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './core/home/home.module#HomeModule' },
  { path: 'mapa', loadChildren: './core/mapa-mundi/mapa-mundi.module#MapaMundiModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
