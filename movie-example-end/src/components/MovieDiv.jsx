import React, { Component } from 'react';
import TheMovie from './TheMovie';

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

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillUpdate() {
    console.log('will update');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  updateMovie() {
    this.setState({
      title: [<h2>Star Wars</h2>, <h2>Finding Nemo</h2>],
    });
  }

  addAnotherMovie() {
    console.log(this.state);
    this.setState(prevState => {
      title: prevState.concat(<h2>Back to the Future</h2>);
    })
  }

  render() {
    console.log('render');
    return (
      <div className="movie-info">
        <h2>Welcome to my movie app!</h2>
        <TheMovie title={this.state.title} />
        <button onClick={this.updateMovie}>Update Movie</button>
        <button onClick={this.addAnotherMovie}>Add Movie</button>
      </div>
    );
  }
}

export default MovieDiv;
