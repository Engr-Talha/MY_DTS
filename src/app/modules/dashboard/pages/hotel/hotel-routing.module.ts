import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';

const routes: Routes = [{ path: 'register', component: HotelRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
