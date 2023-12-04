import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyapplicationRoutingModule } from './myapplication-routing.module';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { TagModule } from 'primeng/tag';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { GeneratechallanComponent } from 'src/app/shared/components/generatechallan/generatechallan.component';
@NgModule({
  declarations: [MyApplicationsComponent],
  imports: [CommonModule, MyapplicationRoutingModule, NgCircleProgressModule, GeneratechallanComponent, TagModule],
})
export class MyapplicationModule {}
