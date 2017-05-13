import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDashboardComponent } from './movie-dashboard.component';

const routes: Routes = [
  { path: '', component: MovieDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDashboardRoutingModule { }

export const routedComponents = [MovieDashboardComponent];
