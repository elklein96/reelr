import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should ...', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
