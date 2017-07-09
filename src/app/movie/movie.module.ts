import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { MovieRoutingModule, routedComponents } from './movie-routing.module';
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    CoreModule,
    MovieRoutingModule
  ],
  declarations: [
    routedComponents,
    MovieComponent
  ],
  exports: [ MovieComponent ]
})
export class MovieModule { }
