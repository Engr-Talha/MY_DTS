import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouristGuideRegistrationComponent } from './tourist-guide-registration/tourist-guide-registration.component';
import { FormsModule } from '@angular/forms';
import { EditapplicationComponent } from './editapplication/editapplication.component';
const routes: Routes = [
  { path: 'register', component: TouristGuideRegistrationComponent },
  { path: 'edit/:id', component: EditapplicationComponent },
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristGuideRoutingModule {}
