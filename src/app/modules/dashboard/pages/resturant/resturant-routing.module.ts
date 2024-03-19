import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResturantRegistrationComponent } from './resturant-registration/resturant-registration.component';

import { ReturantCreateComponent } from './returant-create/returant-create.component';

const routes: Routes = [{ path: 'register', component: ReturantCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantRoutingModule {}
