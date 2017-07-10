import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { PreviewRoutingModule, routedComponents } from './preview-routing.module';
import { PreviewComponent } from './preview.component';
import { MovieModule } from '../movie/movie.module';
import { MovieService } from '../core/movie.service';

@NgModule({
  imports: [
    CoreModule,
    PreviewRoutingModule
  ],
  providers: [ MovieService ],
  declarations: [
    routedComponents,
    PreviewComponent
  ],
  exports: [ PreviewComponent ]
})
export class PreviewModule { }
