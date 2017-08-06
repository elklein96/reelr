import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { MovieDashboardRoutingModule, routedComponents } from './movie-dashboard-routing.module';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieService } from '../core/movie.service';

@NgModule({
  imports: [
    CoreModule,
    MovieDashboardRoutingModule
  ],
  providers: [ MovieService ],
  declarations: [
    routedComponents,
    MovieDashboardComponent
  ],
  exports: [ MovieDashboardComponent ]
})
export class MovieDashboardModule { }
