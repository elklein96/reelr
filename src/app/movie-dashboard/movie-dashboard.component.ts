import { Component, HostListener, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Movie } from '../core/models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'movie-dashboard',
  providers: [MovieService],
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent {
  selectedMovie: Movie;
  title = 'Movies';
  displayedMovies: Movie[];
  movies: Movie[];

  private pageSize = 4;
  private currentPage: number;
  private maxPages: number;

  constructor(private movieService: MovieService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
      this.refreshDashboard();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if (window.pageYOffset > window.innerHeight - 275 * this.currentPage && this.currentPage < this.maxPages) {
      const offset = this.currentPage++ * this.pageSize;
      this.displayedMovies = this.displayedMovies.concat(this.movies.slice(offset, offset + this.pageSize));
    }
  }

  refreshDashboard() {
    this.movieService.getMovies()
      .subscribe(
        (result) => {
          this.movies = result;
          this.currentPage = Math.ceil(window.innerHeight / 275);
          this.maxPages = Math.ceil(this.movies.length / this.pageSize);
          this.title += (` (${this.movies.length})`);
          this.displayedMovies = this.movies.slice(0, this.pageSize * this.currentPage);
        },
        (error) => {
          this.toastr.error(error, 'Could not get movies');
          console.error('Error: Could not get movies: ', error);
        });
  }
}
