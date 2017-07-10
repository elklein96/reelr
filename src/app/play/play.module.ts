import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { PlayRoutingModule, routedComponents } from './play-routing.module';
import { PlayComponent } from './play.component';
import { MovieService } from '../core/movie.service';

@NgModule({
  imports: [
    CoreModule,
    PlayRoutingModule
  ],
  providers: [ MovieService ],
  declarations: [
    routedComponents,
    PlayComponent
  ],
  exports: [ PlayComponent ]
})
export class PlayModule { }
