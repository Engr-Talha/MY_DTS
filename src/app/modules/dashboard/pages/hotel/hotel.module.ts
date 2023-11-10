import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule

@NgModule({
  declarations: [HotelRegistrationComponent],
  imports: [CommonModule, HotelRoutingModule, ReactiveFormsModule],
})
export class HotelModule {}
