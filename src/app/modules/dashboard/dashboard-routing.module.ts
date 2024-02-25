import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
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
        path: 'travel-agency',
        loadChildren: () => import('./pages/travel-agency/travel-agency.module').then((m) => m.TravelAgencyModule),
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
