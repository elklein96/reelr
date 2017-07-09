import { Component, Input, Output, EventEmitter, trigger, transition, style, animate, OnChanges, SimpleChange } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

import { Movie } from '../models/movie.model';

@Component({
  selector: 'preview',
  templateUrl: 'preview.component.html',
  styleUrls: ['preview.component.css'],
  animations: [
    trigger('accordion', [
      transition(':enter', [
        style({ height: 0 }),
        animate(400, style({ height: 310 })) 
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate(400, style({ height: 0 }))
      ])
    ])
  ]
})
export class PreviewComponent {
  
  @Input() movie: Movie;

  constructor(private router: Router) { }

  ngOnChanges(changes: {[ propName: string]: SimpleChange}) {
    console.log('Change detected:', changes);
  }

  ngOnDestroy() {
    console.log(`onDestroy`);
  }

  playMovie() {
    this.router.navigate(['/play'], { queryParams: { movie: this.movie.path } });
  }
}
