import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewerAppListingComponent } from './reviewer-app-listing/reviewer-app-listing.component';
import { ReviewerUserApplicationComponent } from './reviewer-user-application/reviewer-user-application.component';
import { ReviewerResturantComponent } from './reviewer-resturant/reviewer-resturant.component';
import { ReviewerTravelagencyComponent } from './reviewer-travelagency/reviewer-travelagency.component';

const routes: Routes = [
  { path: '', component: ReviewerAppListingComponent },
  { path: 'reviewer-app-listing/:id', component: ReviewerUserApplicationComponent },
  { path: 'reviewer-app-resturant/:id', component: ReviewerResturantComponent },
  { path: 'reviewer-app-travelagency/:id', component: ReviewerTravelagencyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewerRoutingModule {}
