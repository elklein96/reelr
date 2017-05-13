import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {

    constructor(private http: Http) { }

    getMovies(id?: String) {
        let route = id ? `/api/movies?id=${id}` : '/api/movies';

        return this.http
            .get(route)
            .map((response: Response) => {
                localStorage.setItem('reelr_movies', JSON.stringify(response.json().data));
                return <Movie[]>response.json().data;
            })
            .catch(this.handleError);
    }

    getMoviesFromCache(id?: String) {
        return Observable.create((observer) => {
            var cachedMovies = JSON.parse(localStorage.getItem('reelr_movies'));
            if (cachedMovies) observer.next(cachedMovies);
            else {
                this.getMovies(id).subscribe(
                    (movies) => {
                        observer.next(movies)
                    },
                    (error) => {
                        observer.error(error)
                    });
            }
        });
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `${error.status}:: Error at ${error.url}`;
        return Observable.throw(msg);
    }
}
