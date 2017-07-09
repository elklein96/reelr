import { Component, Input } from '@angular/core';

import { Movie } from '../models/movie.model';

@Component({
  selector: 'movie',
  templateUrl: 'movie.component.html',
  styleUrls: [ 'movie.component.css' ]
})
export class MovieComponent {
  
  @Input()
  movie: Movie;
  
  constructor() { }
}
