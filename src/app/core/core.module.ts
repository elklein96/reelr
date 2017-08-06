import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieComponent } from './movie/movie.component';
import { GroupByPipe } from '../core/group-by.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    MovieComponent,
    GroupByPipe
  ],
  exports: [
    MovieComponent,
    GroupByPipe,
    CommonModule
  ]
})
export class CoreModule { }
