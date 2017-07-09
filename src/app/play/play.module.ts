import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { PlayRoutingModule, routedComponents } from './play-routing.module';
import { PlayComponent } from './play.component';

@NgModule({
  imports: [
    CoreModule,
    PlayRoutingModule
  ],
  declarations: [
    routedComponents,
    PlayComponent
  ],
  exports: [ PlayComponent ]
})
export class PlayModule { }
