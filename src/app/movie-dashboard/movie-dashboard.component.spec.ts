import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { MovieDashboardRoutingModule, routedComponents } from './movie-dashboard-routing.module';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieService } from '../core/movie.service';
import { PreviewModule } from '../preview/preview.module';
import { GroupByPipe } from '../core/group-by.pipe';

import { AbstractMockObservableService } from '../../test-helpers/mockService';

class MockMovieService extends AbstractMockObservableService {
  getMoviesFromCache() {
    return this;
  }
}

describe('MovieDashboardComponent', () => {
  let component: MovieDashboardComponent;
  let fixture: ComponentFixture<MovieDashboardComponent>;
  let movieService;

  beforeEach(async(() => {
    movieService = new MockMovieService();

    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MovieDashboardRoutingModule,
        PreviewModule
      ],
      providers: [{provide: MovieService, useValue: movieService }],
      declarations: [
        MovieDashboardComponent,
        routedComponents,
        GroupByPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });
});
