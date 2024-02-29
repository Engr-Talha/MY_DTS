import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyapplicationRoutingModule } from './myapplication-routing.module';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GeneratechallanComponent } from 'src/app/shared/components/generatechallan/generatechallan.component';
@NgModule({
  declarations: [MyApplicationsComponent],
  imports: [
    CommonModule,
    DialogModule,

    MyapplicationRoutingModule,
    NgCircleProgressModule,
    GeneratechallanComponent,
    TagModule,
  ],
})
export class MyapplicationModule {}
