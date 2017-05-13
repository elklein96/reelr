import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../models/movie.model';

@Component({
  selector: 'preview',
  templateUrl: 'preview.component.html',
  styleUrls: ['preview.component.css']
})
export class PreviewComponent {
  
  @Input()
  movie: Movie;
  
  constructor(private router: Router) { }

  playMovie() {
    this.router.navigate(['/play'], { queryParams: { movie: this.movie.path } });
  }
}
