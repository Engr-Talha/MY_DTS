import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResturantRegistrationComponent } from './resturant-registration/resturant-registration.component';

const routes: Routes = [{ path: 'register', component: ResturantRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantRoutingModule {}
