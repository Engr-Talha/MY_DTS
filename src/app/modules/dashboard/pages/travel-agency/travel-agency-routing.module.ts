import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelAgencyRegisterComponent } from './travel-agency-register/travel-agency-register.component';
import { AbstractControl, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

const routes: Routes = [
  { path: 'register', component: TravelAgencyRegisterComponent },
  // { path: 'edit/:id', component: EditapplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelAgencyRoutingModule {}
