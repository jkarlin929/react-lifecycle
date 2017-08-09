import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import MovieDiv from './components/MovieDiv';

class App extends Component {
  constructor() {
    super();
    this.state = {
      batmanList: null,
    }
  }

  componentDidMount() {
    axios.get('http://batman-info.herokuapp.com/api/batman')
      .then(res => {
        const batmanTitles = res.data.Search.map(movie => {
          return <h2>{movie.Title}</h2>;
        });
        this.setState({
          batmanList: batmanTitles,
        })
      })
  }
  render() {
    return (
      <div className="App">
        {(this.state.batmanList) ? this.state.batmanList : ''}
        <MovieDiv />
      </div>
    );
  }
}

export default App;
