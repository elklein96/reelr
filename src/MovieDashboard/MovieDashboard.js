import React, { Component } from 'react';
import './MovieDashboard.css';

import Movie from '../Movie/Movie';
import { getMovies } from '../Core/movies.service';

class MovieDashboard extends Component {

  constructor() {
    super();
    this.getMovies = getMovies.bind();
    this.state = {
      movies: [],
      error: undefined
    };
  }

  render() {
    return (
      <div>
        <h1>Movies ({ this.state.movies.length })</h1>
          {
            this.state.movies.map((movie, index) => {
              return <div key={ index } className="col-sm-3"><Movie { ...this.props } data={ movie }/></div>;
            })
          }
      </div>
    );
  }

  componentDidMount() {
    this.getMovies()
      .then(movies => {
        movies = movies || [];
        this.setState({ movies });
      })
      .catch(err => {
        console.error('uh oh', err);
      });
  }
}

export default MovieDashboard;
