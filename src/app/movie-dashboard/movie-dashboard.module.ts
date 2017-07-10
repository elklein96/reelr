import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { MovieDashboardRoutingModule, routedComponents } from './movie-dashboard-routing.module';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieModule } from '../movie/movie.module';
import { MovieService } from '../core/movie.service';

@NgModule({
  imports: [
    CoreModule,
    MovieDashboardRoutingModule,
    MovieModule
  ],
  providers: [ MovieService ],
  declarations: [
    routedComponents,
    MovieDashboardComponent
  ],
  exports: [ MovieDashboardComponent ]
})
export class MovieDashboardModule { }
