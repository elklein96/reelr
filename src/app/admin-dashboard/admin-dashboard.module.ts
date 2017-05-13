import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule, routedComponents } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MovieModule } from '../movie/movie.module';
import { PreviewModule } from '../preview/preview.module';
import { MovieService } from '../core/movie.service';
import { GroupByPipe } from '../core/group-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MovieModule,
    PreviewModule
  ],
  providers: [MovieService],
  declarations: [
    routedComponents,
    AdminDashboardComponent,
    GroupByPipe
  ],
  exports: [AdminDashboardComponent]
})
export class AdminDashboardModule { }
