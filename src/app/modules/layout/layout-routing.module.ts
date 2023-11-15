import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'inspector-dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../inspector/inspector.module').then((m) => m.InspectorModule),
  },
  {
    path: 'controller-dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../controller/controller.module').then((m) => m.ControllerModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
