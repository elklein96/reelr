import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

  constructor (private movieService: MovieService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
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
          this.toastr.error(error, 'Could not get movies');
          console.error('Error: Could not get movies: ', error);
        });
  }
}
