import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should ...', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
