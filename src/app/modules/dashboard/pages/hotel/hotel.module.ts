import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component'; // Import the ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [HotelRegistrationComponent, HotelCreateComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    CalendarModule,
    ToastModule,
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HotelModule {}
