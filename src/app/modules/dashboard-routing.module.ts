import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('src/app/modules/layout/layout.component').then(mod => mod.DashboardLayoutComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
