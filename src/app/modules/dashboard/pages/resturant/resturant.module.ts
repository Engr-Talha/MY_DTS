import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule

import { ResturantRoutingModule } from './resturant-routing.module';
import { ResturantRegistrationComponent } from './resturant-registration/resturant-registration.component';

@NgModule({
  declarations: [ResturantRegistrationComponent],
  imports: [CommonModule, ResturantRoutingModule, ReactiveFormsModule],
})
export class ResturantModule {}
