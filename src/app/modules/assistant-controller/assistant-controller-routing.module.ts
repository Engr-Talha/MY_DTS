import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistantContApplicationsComponent } from './assistant-cont-applications/assistant-cont-applications.component';
import { AssitantControllerUserApplicationComponent } from './assitant-controller-user-application/assitant-controller-user-application.component';

const routes: Routes = [
  { path: '', component: AssistantContApplicationsComponent },
  { path: 'assistant-cont-app-listing/:id', component: AssitantControllerUserApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistantControllerRoutingModule {}
