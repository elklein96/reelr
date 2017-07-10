import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'preview',
  templateUrl: 'preview.component.html',
  styleUrls: ['preview.component.css']
})
export class PreviewComponent {
  
  private sub;
  movie;

  constructor (private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

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

  ngOnDestroy () {
    this.sub.unsubscribe();
  }

  playMovie () {
    this.router.navigate(['/play'], { queryParams: { movie: this.movie.title } });
  }
}
