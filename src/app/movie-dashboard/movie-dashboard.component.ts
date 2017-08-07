import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Movie } from '../core/models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent {
  movies: Movie[];
  selectedMovie: Movie;
  title = 'Movies';
  showPreview: boolean;

  constructor (private movieService: MovieService) {
    this.refreshDashboard();
  }

  refreshDashboard () {
    this.movieService.getMovies()
      .subscribe(
        (result) => {
          this.movies = result;
          this.title += (` (${this.movies.length})`);
        },
        (error) => {
          console.error('Error: Could not get movies: ', error);
        });
  }
}
