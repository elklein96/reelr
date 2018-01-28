import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { PlayComponent } from './play/play.component';
import { PreviewComponent } from './preview/preview.component';
import { AuthGuard } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movies',
    component: MovieDashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'preview',
    component: PreviewComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'play',
    component: PlayComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    redirectTo: 'movies'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
