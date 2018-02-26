import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Movie } from '../core/models/movie.model';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'reelr-preview',
  providers: [MovieService],
  templateUrl: 'preview.component.html',
  styleUrls: ['preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {
  private sub;
  movie: Movie;
  relatedMovies: Array<Movie>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    const that = this;

    this.sub = this.route
      .queryParams
      .subscribe(lookUpMovie);

    function lookUpMovie(params) {
      that.movieService.getMoviesFromCache(params.movie)
        .subscribe(
          (movie) => {
            that.movie = movie;
            getRelatedMovies();
          },
          (error) => {
            that.toastr.error(error, 'Could not get movie');
            console.error('Error: Could not get movies: ', error);
          });
    }

    function getRelatedMovies() {
      that.movieService.getMovies({ genre: that.movie.genre[0] })
        .subscribe(
          result => {
            that.relatedMovies = result.filter(el => el.title !== that.movie.title);
            return that.relatedMovies;
          },
          error => {
            that.toastr.error(error, 'Could not get related movies');
            console.error('Error: Could not get related movies: ', error);
          });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  playMovie() {
    this.router.navigate(['/play'], { queryParams: { movie: this.movie.title } });
  }
}
