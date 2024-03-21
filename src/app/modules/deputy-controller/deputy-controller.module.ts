import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeputyControllerRoutingModule } from './deputy-controller-routing.module';
import { ApplicationsComponent } from './applications/applications.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import { ApplicationDptComponent } from './application-dpt/application-dpt.component';
import { DeputyControllerComponent } from './deputy-controller/deputy-controller.component';
import { DeputyContTravelAgencyComponent } from './deputy-cont-travel-agency/deputy-cont-travel-agency.component';
@NgModule({
  declarations: [ApplicationsComponent, ApplicationDptComponent, DeputyControllerComponent, DeputyContTravelAgencyComponent],
  imports: [
    CommonModule,
    MultiSelectModule,
    DeputyControllerRoutingModule,
    InputTextModule,
    InputTextareaModule,
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    ProgressBarModule,
    ToastModule,
    DropdownModule,
    ChartModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    TagModule,
  ],
})
export class DeputyControllerModule {}
