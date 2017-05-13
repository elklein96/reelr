import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewRoutingModule, routedComponents } from './preview-routing.module';
import { PreviewComponent } from './preview.component';

@NgModule({
  imports: [
    CommonModule,
    PreviewRoutingModule
  ],
  declarations: [
    routedComponents,
    PreviewComponent
  ],
  exports: [PreviewComponent]
})
export class PreviewModule { }
