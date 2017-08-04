import React, { Component } from 'react';

class MovieDiv extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      releaseYear: null,
    };
    this.updateMovie = this.updateMovie.bind(this);
  }

  updateMovie() {
    this.setState({
      title: 'Finding Nemo',
    })
  }

  render() {
    return (
      <div className="movie-info">
        <h2>Welcome to my movie app!</h2>
        <h3>The movie is {this.state.title}.</h3>
        <button onClick={this.updateMovie}>Update Movie</button>
      </div>
    )
  }
}

export default MovieDiv;