import React, { Component } from 'react';

class MovieDiv extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      releaseYear: null,
    };
    this.updateMovie = this.updateMovie.bind(this);
    this.addAnotherMovie = this.addAnotherMovie.bind(this);
  }

  updateMovie() {
    this.setState({
      title: [<h2>Star Wars</h2>, <h2>Finding Nemo</h2>],
    })
  }

  addAnotherMovie() {
    const state = {...this.state};
    state.title.push(<h2>Back to the Future</h2>);
    this.setState( state );
  }

  render() {
    return (
      <div className="movie-info">
        <h2>Welcome to my movie app!</h2>
        <div>The movie is {this.state.title}.</div>
        <button onClick={this.updateMovie}>Update Movie</button>
        <button onClick={this.addAnotherMovie}>Add Movie</button>
      </div>
    )
  }
}

export default MovieDiv;