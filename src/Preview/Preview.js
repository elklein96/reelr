import React, { Component } from 'react';
import './Preview.css';

import Movie from '../Movie/Movie';
import { getMovies } from '../Core/movies.service';

class Preview extends Component {

  constructor() {
    super();
    this.getMovies = getMovies.bind();
    this.state = {
      movie: {
        genre: []
      },
      relatedMovies: [],
      error: undefined
    };
  }

  render() {
    return (
      <div id="preview-container">
        <div className="row">
          <div className="image-container col-md-4">
            <img className="poster-big" src={ this.state.movie.posterUrl } alt={ this.state.movie.title }/>
          </div>
          <div className="col-md-8">
            <h2>{ this.state.movie.title }</h2>
            <p>{ this.state.movie.director }</p>
            <p>{ this.state.movie.genre.join(', ') }</p>
            <p>{ this.state.movie.plot }</p>
            <hr />
            <a className="button btn-play">Play</a>
            <a href={ this.state.movie.path } className="button btn-download" target="_blank">Download</a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <h4>Related Movies:</h4>
          </div>
          {
            this.state.relatedMovies.map((movie, index) => {
              return <div key={ index } className="col-sm-3"><Movie { ...this.props } data={ movie }/></div>;
            })
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getMovieInfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.getMovieInfo();
    }
  }

  getMovieInfo() {
    this.getMovies({ title: this.props.match.params.movie })
      .then(movies => {
        this.setState({ movie: movies[0] });
      })
      .then(() => this.getRelatedMovies())
      .catch(err => {
        console.error('uh oh', err);
      });
  }

  getRelatedMovies() {
    return this.getMovies({ genre: this.state.movie.genre[0] })
      .then(result => {
        return result.filter(el => el.title !== this.state.movie.title);
      })
      .then(relatedMovies => {
        this.setState({ relatedMovies });
      })
      .catch(err => {
        console.error('uh oh', err);
      });
  }
}

export default Preview;
