import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDashboardRoutingModule, routedComponents } from './movie-dashboard-routing.module';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieModule } from '../movie/movie.module';
import { PreviewModule } from '../preview/preview.module';
import { MovieService } from '../core/movie.service';
import { GroupByPipe } from '../core/group-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    MovieDashboardRoutingModule,
    MovieModule,
    PreviewModule
  ],
  providers: [MovieService],
  declarations: [
    routedComponents,
    MovieDashboardComponent,
    GroupByPipe
  ],
  exports: [MovieDashboardComponent]
})
export class MovieDashboardModule { }
