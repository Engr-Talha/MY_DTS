import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewerAppListingComponent } from './reviewer-app-listing/reviewer-app-listing.component';
import { ReviewerUserApplicationComponent } from './reviewer-user-application/reviewer-user-application.component';

const routes: Routes = [
  { path: '', component: ReviewerAppListingComponent },
  { path: 'reviewer-app-listing/:id', component: ReviewerUserApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewerRoutingModule {}
