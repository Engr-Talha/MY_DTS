import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { TravelAgencyApplicationComponent } from './travel-agency-application/travel-agency-application.component';
import { TouristGuideApplicationComponent } from './tourist-guide-application/tourist-guide-application.component';
import { ResturantApplicationComponent } from './resturant-application/resturant-application.component';
import { HotelApplicationComponent } from './hotel-application/hotel-application.component';

const routes: Routes = [
  { path: '', component: MyApplicationsComponent },
  { path: 'travel-agency-application/:id', component: TravelAgencyApplicationComponent },
  { path: 'tourist-guide-application/:id', component: TouristGuideApplicationComponent },
  { path: 'resturant-application/:id', component: ResturantApplicationComponent },
  { path: 'hotel-application/:id', component: HotelApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyapplicationRoutingModule {}
