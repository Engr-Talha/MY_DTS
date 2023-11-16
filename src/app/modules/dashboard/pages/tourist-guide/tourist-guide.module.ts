import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

import { TouristGuideRoutingModule } from './tourist-guide-routing.module';
import { ChartModule } from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TouristGuideRegistrationComponent } from './tourist-guide-registration/tourist-guide-registration.component'; // Import the ReactiveFormsModule
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
@NgModule({
  declarations: [TouristGuideRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    TouristGuideRoutingModule,
    LoaderComponent,
    ReactiveFormsModule,
    ChartModule,
  ],
})
export class TouristGuideModule {}
