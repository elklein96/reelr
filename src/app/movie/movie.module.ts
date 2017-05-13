import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule, routedComponents } from './movie-routing.module';
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [
    routedComponents,
    MovieComponent
  ],
  exports: [MovieComponent]
})
export class MovieModule { }
