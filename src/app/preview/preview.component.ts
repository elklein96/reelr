import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Movie } from '../core/models/movie.model';
import { MovieService } from '../core/movie.service';
import { AuthService } from '../core/auth.service';
import { WindowRef } from '../core/window-ref.service';

@Component({
  selector: 'reelr-preview',
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
    private authService: AuthService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private windowRef: WindowRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    const that = this;

    this.sub = this.route.queryParams
      .subscribe(lookUpMovie);

    function lookUpMovie(params) {
      that.movieService.getMoviesFromCache(params.movie)
        .subscribe(
          movie => {
            that.movie = movie;
            getRelatedMovies();
          },
          error => {
            that.toastr.error(error, 'Could not get movie');
            console.error('Error: Could not get movies: ', error);
          });
    }

    function getRelatedMovies() {
      that.movieService.getMovies({ genre: that.movie.genre[0] })
        .subscribe(
          result => that.relatedMovies = result.filter(el => el.title !== that.movie.title),
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
    this.logEvent('play')
      .subscribe({
        next: () => {},
        error: error => console.error('Error: Could not log analytics: ', error),
        complete: () => this.router.navigate(['/play'], { queryParams: { movie: this.movie.title } })
      });
  }

  downloadMovie() {
    this.logEvent('download')
      .subscribe({
          next: () => {},
          error: error => console.error('Error: Could not log analytics: ', error),
          complete: () => this.windowRef.nativeWindow.open(this.movie.path, '_blank')
      });
  }

  logEvent(action: string) {
    const activity = {
      action,
      movie: this.movie.title
    }
    return this.authService.logActivity(activity);
  }
}
