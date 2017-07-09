import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { PreviewRoutingModule, routedComponents } from './preview-routing.module';
import { PreviewComponent } from './preview.component';

@NgModule({
  imports: [
    CoreModule,
    PreviewRoutingModule
  ],
  declarations: [
    routedComponents,
    PreviewComponent
  ],
  exports: [ PreviewComponent ]
})
export class PreviewModule { }
