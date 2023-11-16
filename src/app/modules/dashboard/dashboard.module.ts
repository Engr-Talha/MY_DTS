import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartModule } from 'primeng/chart';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    DashboardRoutingModule,
    DialogModule,
    ProgressBarModule,
    ToastModule,
    DropdownModule,
    ChartModule,
    CommonModule,
    ButtonModule,
  ],
  declarations: [DashbaordComponent],
})
export class DashboardModule {}
