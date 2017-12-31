import { Component, Output, EventEmitter, HostListener, ViewContainerRef } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

  constructor (private movieService: MovieService,
    private datePipe: DatePipe,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  handleFiles (event) {
    this.file = event.srcElement.files[0];
    this.selectedMovie.title = !this.file ? '' : this.file.name.substr(0, this.file.name.lastIndexOf('.'));
    this.getPossibleMovies();
  }

  getPossibleMovies () {
    this.movieService.getMoviesByTitle({ movie: this.selectedMovie.title })
      .subscribe(
        (result) => {
          this.choices = result;
        },
        (error) => {
          this.toastr.error(error, 'Could not get movies');
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
          this.toastr.error(error, 'Could not upload movie');
          console.error('Error: Could not upload movies: ', error);
        });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent (event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.delete.emit('destroy');
    }
  }
}
