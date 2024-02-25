import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SignInComponent } from '../auth/pages/sign-in/sign-in.component';
import { DashbaordComponent } from '../dashboard/pages/dashbaord/dashbaord.component';
import { RoleBasedAuthGuard } from 'src/app/core/guards/role-based-auth-guard.guard';
const routes: Routes = [
  {
    path: '',
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

  {
    path: 'dptcontroller-dashboard',

    component: LayoutComponent,
    loadChildren: () => import('../deputy-controller/deputy-controller.module').then((m) => m.DeputyControllerModule),
  },

  {
    path: 'astcontroller-dashboard',

    component: LayoutComponent,
    loadChildren: () =>
      import('../assistant-controller/assistant-controller.module').then((m) => m.AssistantControllerModule),
  },
  {
    path: 'reviewer-dashboard',

    component: LayoutComponent,
    loadChildren: () => import('../reviewer/reviewer.module').then((m) => m.ReviewerModule),
  },

  // { path: '', component: DashbaordComponent },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
