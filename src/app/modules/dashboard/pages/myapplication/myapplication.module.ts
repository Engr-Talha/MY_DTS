import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyapplicationRoutingModule } from './myapplication-routing.module';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GeneratechallanComponent } from 'src/app/shared/components/generatechallan/generatechallan.component';
import { TravelAgencyApplicationComponent } from './travel-agency-application/travel-agency-application.component';
import { TouristGuideApplicationComponent } from './tourist-guide-application/tourist-guide-application.component';
import { HotelApplicationComponent } from './hotel-application/hotel-application.component';
import { ResturantApplicationComponent } from './resturant-application/resturant-application.component';
@NgModule({
  declarations: [MyApplicationsComponent, TravelAgencyApplicationComponent, TouristGuideApplicationComponent, HotelApplicationComponent, ResturantApplicationComponent],
  imports: [
    CommonModule,
    DialogModule,

    MyapplicationRoutingModule,
    NgCircleProgressModule,
    GeneratechallanComponent,
    TagModule,
  ],
})
export class MyapplicationModule {}
