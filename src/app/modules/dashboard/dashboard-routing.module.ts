import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // { path: '', redirectTo: 'nfts', pathMatch: 'full' },
      { path: '', component: DashbaordComponent },
      { path: '**', redirectTo: 'error/404' },
      {
        path: 'hotel',
        loadChildren: () => import('./pages/hotel/hotel.module').then((m) => m.HotelModule),
      },
      {
        path: 'resturant',
        loadChildren: () => import('./pages/resturant/resturant.module').then((m) => m.ResturantModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'tourist-guide',
        loadChildren: () => import('./pages/tourist-guide/tourist-guide.module').then((m) => m.TouristGuideModule),
      },
      {
        path: 'my-registrations',
        loadChildren: () => import('./pages/myapplication/myapplication.module').then((m) => m.MyapplicationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
