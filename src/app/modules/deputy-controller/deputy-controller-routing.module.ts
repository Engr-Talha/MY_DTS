import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDptComponent } from './application-dpt/application-dpt.component';
import { DeputyControllerComponent } from './deputy-controller/deputy-controller.component';
import { DeputyContTravelAgencyComponent } from './deputy-cont-travel-agency/deputy-cont-travel-agency.component';
const routes: Routes = [
  { path: '', component: ApplicationsComponent },
  { path: 'app-dpt/:id', component: ApplicationDptComponent },
  { path: 'dptcontroller-resturant-applications/:id', component: DeputyControllerComponent },
  { path: 'dptcontroller-app-travelagency/:id', component: DeputyContTravelAgencyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeputyControllerRoutingModule {}
