import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule, routedComponents } from './play-routing.module';
import { PlayComponent } from './play.component';

@NgModule({
  imports: [
    CommonModule,
    PlayRoutingModule
  ],
  declarations: [
    routedComponents,
    PlayComponent
  ],
  exports: [PlayComponent]
})
export class PlayModule { }
