import { Component, trigger, transition, style, animate } from '@angular/core';

import { Movie } from '../models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  animations: [
    trigger('accordion', [
      transition(':enter', [
        style({height: 0}),
        animate(250, style({height: 310})) 
      ]),
      transition(':leave', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class AdminDashboardComponent {
  movies: Movie[];
  selectedMovie: Movie;
  title: string = 'Movies';
  previewIndex: Number = undefined;

  constructor(private movieService: MovieService) {
    this.movieService.getMoviesFromCache()
      .subscribe(
        (movies) => {
          this.movies = movies;
          this.title += ` (${movies.length})`;
        },
        (error) => {
          console.error('Error: Could not get movies: ', error);
        });
  }

  togglePreview(movie: Movie, previewIndex: Number) {
    if (this.selectedMovie === movie) {
      this.previewIndex = undefined;
      this.selectedMovie = undefined;
    } else {
      this.previewIndex = previewIndex;
      this.selectedMovie = movie;
    }
  }
}
