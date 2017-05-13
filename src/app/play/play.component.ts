import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../models/movie.model';

@Component({
  selector: 'play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.css']
})
export class PlayComponent {

  private sub;
  movie;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.movie = params['movie'] || '';
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
