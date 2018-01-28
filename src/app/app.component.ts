import { Component, HostListener, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthService } from './core/auth.service';
import { MovieService } from './core/movie.service';

@Component({
  selector: 'reelr-app',
  providers: [MovieService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  showModal: Boolean = false;

  constructor(private authService: AuthService,
    private movieService: MovieService,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  modalDeleted(evt) {
    this.showModal = false;
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logOut()
      .subscribe(
        (result) => {
          this.router.navigate(['/login']);
        },
        (error) => {
          this.toastr.error(error, 'Could not log out');
          console.error('Error: Could not log out: ', error);
        });
  }

  search(query: string) {
    this.movieService.getMovies({ title: query })
      .subscribe(
        (result) => {
          // self.movieDashboardComponent.movies = result;
          console.log(result);
        },
        (error) => {
          this.toastr.error(error, 'Could not get movies');
          console.error('Error: Could not get movies: ', error);
        });
  }
}
