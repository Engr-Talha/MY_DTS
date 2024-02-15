import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantControllerRoutingModule } from './assistant-controller-routing.module';
import { AssistantContApplicationsComponent } from './assistant-cont-applications/assistant-cont-applications.component';
import { AssitantControllerUserApplicationComponent } from './assitant-controller-user-application/assitant-controller-user-application.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [AssistantContApplicationsComponent, AssitantControllerUserApplicationComponent],
  imports: [
    CommonModule,
    AssistantControllerRoutingModule,
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
})
export class AssistantControllerModule {}