import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'reelr-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  logIn(username, password) {
    this.authService.logIn(username, password)
      .subscribe(
        (result) => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.toastr.error('Username or password incorrect', 'Could not log in');
          console.error('Error: Could not log in: ', error);
        });
  }
}
