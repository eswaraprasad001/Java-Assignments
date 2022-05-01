import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path:'profile',component :ProfileComponent,canActivate: [AuthGuard]
  },
  {
    path:'home',component: HomeComponent
  },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
