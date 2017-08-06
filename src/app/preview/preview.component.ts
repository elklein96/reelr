import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Movie } from '../core/models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'preview',
  templateUrl: 'preview.component.html',
  styleUrls: ['preview.component.css']
})
export class PreviewComponent {
  private sub;
  movie: Movie;
  relatedMovies: Array<Movie>;

  constructor (private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit () {
    this.sub = this.route
      .queryParams
      .subscribe((params) => {
        this.movieService.getMoviesFromCache(params.movie)
          .map((result) => {
            this.movie = result;
            return this.movie
          })
          .subscribe((result) => {
            this.movieService.getMovies({ genre: this.movie.genre[0] })
              .subscribe((result) => {
                this.relatedMovies = result.filter((el) => {
                  return el.title !== this.movie.title;
                });
                return this.relatedMovies;
              });
          })
        });
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }

  playMovie () {
    this.router.navigate(['/play'], { queryParams: { movie: this.movie.title } });
  }
}
