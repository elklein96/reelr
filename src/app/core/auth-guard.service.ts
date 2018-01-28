import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, ActivatedRouteSnapshot,
    RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
