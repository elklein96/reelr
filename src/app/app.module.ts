import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ToastModule.forRoot()
  ],
  declarations: [
    AppComponent,
    UploadComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
