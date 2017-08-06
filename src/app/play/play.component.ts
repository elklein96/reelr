import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../core/models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.css']
})
export class PlayComponent {

  private sub;
  movie: Movie;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit () {
    this.sub = this.route
      .queryParams
      .subscribe(
        (params) => {
          this.movieService.getMoviesFromCache(params.movie)
            .subscribe(
              (result) => {
                this.movie = result;
              },
              (error) => {
                console.error(error);
              })
        },
        (error) => {
          console.error(error);
        });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
