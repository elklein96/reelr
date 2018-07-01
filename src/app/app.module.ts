import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieComponent } from './movie/movie.component';
import { PlayComponent } from './play/play.component';
import { PreviewComponent } from './preview/preview.component';
import { AuthGuard } from './core/auth-guard.service';
import { AuthService } from './core/auth.service';
import { CookieService } from './core/cookie.service';
import { WindowRef } from './core/window-ref.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoginComponent,
    MovieDashboardComponent,
    MovieComponent,
    PlayComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {}
    }),
    ToastModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    CookieService,
    JwtHelperService,
    WindowRef
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
