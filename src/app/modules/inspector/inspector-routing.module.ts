import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectorDashboardComponent } from './inspector-dashboard/inspector-dashboard.component';
import { ApplicationListingComponent } from './application-listing/application-listing.component';
import { InspectorUserApplicationComponent } from './inspector-user-application/inspector-user-application.component';
import { InspectorResturantComponent } from './inspector-resturant/inspector-resturant.component';
import { InspectorTravelAgencyComponent } from './inspector-travel-agency/inspector-travel-agency.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationListingComponent,
    children: [
      { path: '', component: ApplicationListingComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
  { path: 'all-applications', component: ApplicationListingComponent },
  { path: 'user-applications/:id', component: InspectorUserApplicationComponent },
  { path: 'inspector-resturant-applications/:id', component: InspectorResturantComponent },
  { path: 'inspector-app-travelagency/:id', component: InspectorTravelAgencyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectorRoutingModule {}
