import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InspectorRoutingModule } from './inspector-routing.module';
import { InspectorDashboardComponent } from './inspector-dashboard/inspector-dashboard.component';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ApplicationListingComponent } from './application-listing/application-listing.component';
import { InspectorUserApplicationComponent } from './inspector-user-application/inspector-user-application.component';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InspectorResturantComponent } from './inspector-resturant/inspector-resturant.component';
import { InspectorTravelAgencyComponent } from './inspector-travel-agency/inspector-travel-agency.component';

@NgModule({
  declarations: [InspectorDashboardComponent, ApplicationListingComponent, InspectorUserApplicationComponent, InspectorResturantComponent, InspectorTravelAgencyComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    CommonModule,
    InspectorRoutingModule,
    DialogModule,
    ProgressBarModule,
    ToastModule,
    DropdownModule,
    ChartModule,
    CommonModule,
    ButtonModule,
    TableModule,
  ],
})
export class InspectorModule {}
