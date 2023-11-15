import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristGuideRoutingModule } from './tourist-guide-routing.module';
import { ChartModule } from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TouristGuideRegistrationComponent } from './tourist-guide-registration/tourist-guide-registration.component'; // Import the ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TouristGuideRegistrationComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, TouristGuideRoutingModule, ReactiveFormsModule, ChartModule],
})
export class TouristGuideModule {}
