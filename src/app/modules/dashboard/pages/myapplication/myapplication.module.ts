import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyapplicationRoutingModule } from './myapplication-routing.module';
import { MyApplicationsComponent } from './my-applications/my-applications.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [MyApplicationsComponent],
  imports: [CommonModule, MyapplicationRoutingModule, NgCircleProgressModule],
})
export class MyapplicationModule {}
