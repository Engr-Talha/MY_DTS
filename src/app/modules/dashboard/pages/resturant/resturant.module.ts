import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule

import { ResturantRoutingModule } from './resturant-routing.module';
import { ResturantRegistrationComponent } from './resturant-registration/resturant-registration.component';
import { ReturantCreateComponent } from './returant-create/returant-create.component';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@NgModule({
  declarations: [ResturantRegistrationComponent, ReturantCreateComponent],
  imports: [
    CommonModule,
    ResturantRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    ToastModule,
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ResturantModule {}
