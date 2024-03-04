import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';

const routes: Routes = [
  { path: 'create', component: HotelRegistrationComponent },
  { path: 'register', component: HotelCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
