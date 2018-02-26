import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {

  formatDate() {
    const d = new Date(this.props.data.year);
    const corrected = new Date(d.getTime() + Math.abs(d.getTimezoneOffset() * 60000));
    const month = corrected.toLocaleString('en-us', { month: 'long' });
    return `${month} ${corrected.getDate()}, ${corrected.getFullYear()}`;
  }

  navigateToPreview(title) {
    this.props.history.push(`/preview/${title}`);
  }

  render() {
    return (
      <div className="movie" onClick={ () => { this.navigateToPreview(this.props.data.title) } }>
        <div className="poster-container">
          <img className="poster" src={ this.props.data.posterUrl } alt={ this.props.data.title }/>
        </div>
        <div className="info">
          <p id="title">{ this.props.data.title }</p>
          <p id="date">{ this.formatDate() }</p>
        </div>
      </div>
    );
  }
}

export default Movie;
