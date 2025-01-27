import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerDashbaordComponent } from './controller-dashbaord/controller-dashbaord.component';
import { DocumentCheckControllerComponent } from './document-check-controller/document-check-controller.component';
import { ContApplicationListingComponent } from './cont-application-listing/cont-application-listing.component';
import { ControllerUserApplicationComponent } from './controller-user-application/controller-user-application.component';
import { ControllerResturnatComponent } from './controller-resturnat/controller-resturnat.component';
import { ControllerTravelAgencyComponent } from './controller-travel-agency/controller-travel-agency.component';
import { ControllerHotelComponent } from './controller-hotel/controller-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: ContApplicationListingComponent,
    children: [
      { path: '', component: ContApplicationListingComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
  { path: 'document-check', component: DocumentCheckControllerComponent },
  { path: 'application-listing', component: ContApplicationListingComponent },
  { path: 'userCont-application-listing/:id', component: ControllerUserApplicationComponent },
  { path: 'controller-resturant-applications/:id', component: ControllerResturnatComponent },
  { path: 'controller-app-travelagency/:id', component: ControllerTravelAgencyComponent },
  { path: 'controller-app-hotel/:id', component: ControllerHotelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControllerRoutingModule {}
