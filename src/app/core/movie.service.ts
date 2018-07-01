import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Movie } from './models/movie.model';

@Injectable()
export class MovieService {

    private _subject = new BehaviorSubject('');

    constructor (private http: Http) { }

    doSearch(searchTerm: string) {
        this._subject.next(searchTerm);
    }

    getSearchStream(): Observable<string> {
        return this._subject.asObservable();
    }

    getMovies(query?: Object) {
        return this.http
            .get('/api/movies', { search: query })
            .map((response: Response) => {
                localStorage.setItem('reelr_movies', JSON.stringify(response.json().data));
                return <Movie[]>response.json().data;
            })
            .catch(this.handleError);
    }

    getMoviesByTitle(query?: Object) {
        return this.http
            .get('/api/movies/all', { search: query })
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getMoviesFromCache(id?: string) {
        return Observable.create(cacheLookup)
            .map((result) => {
                return result;
            });

        function cacheLookup(observer) {
            const cachedMovies = JSON.parse(localStorage.getItem('reelr_movies'));
            if (cachedMovies && id) {
                for (const movie of cachedMovies) {
                    if (movie.title === id) { observer.next(movie); }
                }
            } else if (cachedMovies) {
                observer.next(cachedMovies);
            } else {
                this.getMovies(id).subscribe(
                    movies => observer.next(movies),
                    error => observer.error(error)
                );
            }
        }
    }

    createMovie(payload?: Object) {
        return this.http
            .post('/api/movies', { movie: payload })
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
