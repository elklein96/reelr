import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    loadChildren: 'app/movie-dashboard/movie-dashboard.module#MovieDashboardModule'
  },
  {
    path: 'play',
    loadChildren: 'app/play/play.module#PlayModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
