import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';

import { TravelAgencyRoutingModule } from './travel-agency-routing.module';
import { TravelAgencyRegisterComponent } from './travel-agency-register/travel-agency-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';


@NgModule({
  declarations: [
    TravelAgencyRegisterComponent
  ],
  imports: [
    CommonModule,
    TravelAgencyRoutingModule,
    LoaderComponent,
    ReactiveFormsModule,
    ChartModule,
    FormsModule,
    ToastModule
  ]
})
export class TravelAgencyModule { }
