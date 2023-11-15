import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ControllerRoutingModule } from './controller-routing.module';
import { ControllerDashbaordComponent } from './controller-dashbaord/controller-dashbaord.component';
import { DocumentCheckControllerComponent } from './document-check-controller/document-check-controller.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ContApplicationListingComponent } from './cont-application-listing/cont-application-listing.component';
import { ControllerUserApplicationComponent } from './controller-user-application/controller-user-application.component';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    ControllerDashbaordComponent,
    DocumentCheckControllerComponent,
    ContApplicationListingComponent,
    ControllerUserApplicationComponent,
  ],
  imports: [
    InputTextModule,
    InputTextareaModule,
    CommonModule,
    ControllerRoutingModule,
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
    TableModule,
    TagModule,
  ],
  providers: [
    DatePipe, // Ensure DatePipe is included in the providers array
    // other services or dependencies
  ],
})
export class ControllerModule {}
