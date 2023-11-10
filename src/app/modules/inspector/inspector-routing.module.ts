import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectorDashboardComponent } from './inspector-dashboard/inspector-dashboard.component';
import { ApplicationListingComponent } from './application-listing/application-listing.component';
import { InspectorUserApplicationComponent } from './inspector-user-application/inspector-user-application.component';

const routes: Routes = [
  {
    path: '',
    component: InspectorDashboardComponent,
    children: [
      { path: '', component: InspectorDashboardComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
  { path: 'all-applications', component: ApplicationListingComponent },
  { path: 'user-applications/:id', component: InspectorUserApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectorRoutingModule {}
