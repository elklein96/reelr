import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

    constructor (private http: Http, private router: Router) { }

    logIn(username: string, password: string) {
        return this.http
            .post('/api/login', { username, password })
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
