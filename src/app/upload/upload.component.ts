import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MovieService } from '../core/movie.service';

@Component({
  selector: 'reelr-upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.css'],
  providers: [ DatePipe, MovieService ]
})
export class UploadComponent {
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  uploadedFiles: Array<any> = [];
  choices: Array<any> = [];
  file: any;
  status = 0;
  selectedMovie = {
    title: '',
    year: ''
  };

  constructor (private movieService: MovieService, private datePipe: DatePipe) { }

  handleFiles (event) {
    this.file = event.srcElement.files[0];
    this.selectedMovie.title = !this.file ? '' : this.file.name.substr(0, this.file.name.lastIndexOf('.'));
    this.getRelatedMovies();
  }

  getRelatedMovies () {
    this.movieService.getMoviesByTitle({ movie: this.selectedMovie.title })
      .subscribe(
        (result) => {
          this.choices = result;
        },
        (error) => {
          console.error('Error: Could not get movies: ', error);
        });
  }

  selectMovie (movie) {
    this.choices = [];
    this.selectedMovie.title = movie.title;
    this.selectedMovie.year = this.datePipe.transform(movie.date, 'y');
  }

  upload () {
    this.movieService.createMovie(this.selectedMovie)
      .subscribe(
        (result) => {
          this.delete.emit('destroy');
          console.log(result);
        },
        (error) => {
          console.error('Error: Could not get movies: ', error);
        });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent (event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.delete.emit('destroy');
    }
  }
}
