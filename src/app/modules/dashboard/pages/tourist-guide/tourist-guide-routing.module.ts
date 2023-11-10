import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouristGuideRegistrationComponent } from './tourist-guide-registration/tourist-guide-registration.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{ path: 'register', component: TouristGuideRegistrationComponent }];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristGuideRoutingModule {}
