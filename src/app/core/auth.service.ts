import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CookieService } from './cookie.service';

@Injectable()
export class AuthService {

    constructor (private http: Http,
        private jwtHelper: JwtHelperService,
        private cookieService: CookieService) { }

    logIn(username: string, password: string) {
        return this.http
            .post('/api/login', { username, password })
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    isLoggedIn() {
        try {
            const token = this.cookieService.getCookie('reelr_jwt');
            const loggedIn = !this.jwtHelper.isTokenExpired(token);
            if (loggedIn) {
                return loggedIn;
            }
        } catch (e) {}

        return false;
    }

    logOut() {
        return this.http
            .delete('/api/login')
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        const msg = `${error.status}:: Error at ${error.url}`;
        return Observable.throw(msg);
    }
}
