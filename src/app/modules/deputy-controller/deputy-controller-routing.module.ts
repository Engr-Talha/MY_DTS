import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDptComponent } from './application-dpt/application-dpt.component';
const routes: Routes = [
  { path: '', component: ApplicationsComponent },
  { path: 'app-dpt/:id', component: ApplicationDptComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeputyControllerRoutingModule {}
