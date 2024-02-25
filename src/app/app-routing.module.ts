import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratechallanComponent } from './shared/components/generatechallan/generatechallan.component';
import { CertificateComponent } from './shared/components/certificate/certificate.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '**', redirectTo: 'error/404' },
  { path: 'generate-challan/:id', component: GeneratechallanComponent },
  { path: 'Show-Certificate/:id', component: CertificateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
