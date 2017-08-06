import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from './models/movie.model';

@Injectable()
export class MovieService {

    constructor (private http: Http) { }

    getMovies (query?: Object) {
        return this.http
            .get('/api/movies', { search: query })
            .map((response: Response) => {
                localStorage.setItem('reelr_movies', JSON.stringify(response.json().data));
                return <Movie[]>response.json().data;
            })
            .catch(this.handleError);
    }

    getMoviesFromCache (id?: string) {
        return Observable.create((observer) => {
            const cachedMovies = JSON.parse(localStorage.getItem('reelr_movies'));
            if (cachedMovies && id) {
                for (const movie of cachedMovies) {
                    if (movie.title === id) { observer.next(movie); }
                }
            } else if (cachedMovies) {
                observer.next(cachedMovies);
            } else {
                this.getMovies(id).subscribe(
                    (movies) => {
                        observer.next(movies);
                    },
                    (error) => {
                        observer.error(error);
                    });
            }
        });
    }

    private handleError (error: Response) {
        console.error(error);
        const msg = `${error.status}:: Error at ${error.url}`;
        return Observable.throw(msg);
    }
}
