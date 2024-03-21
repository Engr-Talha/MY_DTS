import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ReviewerAppListingComponent } from './reviewer-app-listing/reviewer-app-listing.component';
import { ReviewerUserApplicationComponent } from './reviewer-user-application/reviewer-user-application.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { TagModule } from 'primeng/tag';

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
import { ReviewerResturantComponent } from './reviewer-resturant/reviewer-resturant.component';
import { ReviewerTravelagencyComponent } from './reviewer-travelagency/reviewer-travelagency.component';

@NgModule({
  declarations: [ReviewerAppListingComponent, ReviewerUserApplicationComponent, ReviewerResturantComponent, ReviewerTravelagencyComponent],
  imports: [
    CommonModule,
    ReviewerRoutingModule,
    InputTextModule,
    InputTextareaModule,

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
export class ReviewerModule {}
