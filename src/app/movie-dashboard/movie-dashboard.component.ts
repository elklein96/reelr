import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Movie } from '../models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent {
  movies: Movie[];
  selectedMovie: Movie;
  title: string = 'Movies';
  previewIndex: Number = undefined;
  showPreview: boolean;

  constructor (private movieService: MovieService) {
    this.movieService.getMoviesFromCache()
      .subscribe(
        (result) => {
          this.movies = result;
          this.title += ` (${this.movies.length})`;
        },
        (error) => {
          console.error('Error: Could not get movies: ', error);
        });
  }

  togglePreview (movie: Movie, previewIndex: Number) {
    if (this.selectedMovie === movie) {
      this.selectedMovie = undefined;
      this.previewIndex = undefined;
    } else {
      this.selectedMovie = movie;
      this.previewIndex = previewIndex;
    }
  }
}
