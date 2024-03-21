import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistantContApplicationsComponent } from './assistant-cont-applications/assistant-cont-applications.component';
import { AssitantControllerUserApplicationComponent } from './assitant-controller-user-application/assitant-controller-user-application.component';
import { AssistantControllerResturantComponent } from './assistant-controller-resturant/assistant-controller-resturant.component';
import { AssistantControllerTravelAgenctComponent } from './assistant-controller-travel-agenct/assistant-controller-travel-agenct.component';

const routes: Routes = [
  { path: '', component: AssistantContApplicationsComponent },
  { path: 'assistant-cont-app-listing/:id', component: AssitantControllerUserApplicationComponent },
  { path: 'asstcontroller-app-resturant/:id', component: AssistantControllerResturantComponent },
  { path: 'astcontroller-app-travelagency/:id', component: AssistantControllerTravelAgenctComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistantControllerRoutingModule {}
