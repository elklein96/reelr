import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../models/movie.model';

@Component({
  selector: 'movie',
  templateUrl: 'movie.component.html',
  styleUrls: [ 'movie.component.css' ]
})
export class MovieComponent {
  
  @Input()
  movie: Movie;
  
  constructor (private router: Router) { }

  displayPreview () {
    this.router.navigate(['/preview'], { queryParams: { movie: this.movie.title } });
  }
}
