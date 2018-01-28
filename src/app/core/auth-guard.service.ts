import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, ActivatedRouteSnapshot,
    RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { AuthService } from '../core/auth.service';
import { CookieService } from './cookie.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService,
    private cookieService: CookieService,
    private jwtHelper: JwtHelperService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.cookieService.getCookie('reelr_jwt');
    let loggedIn;

    if (!token) {
      this.router.navigate(['/login']);
    }

    try {
      loggedIn = !this.jwtHelper.isTokenExpired(token);
      if (loggedIn) {
        return loggedIn;
      }
    } catch (e) {}

    this.router.navigate(['/login']);
  }
}
