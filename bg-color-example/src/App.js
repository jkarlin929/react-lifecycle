import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: '#ffffff',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let newColor = `#${e.target.value}`;
    newColor.length < 4 ? (newColor = '#fff') : null;
    this.setState({
      bgColor: newColor,
    });
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.bgColor }}>
        <div className="input-holder">
          <input
            type="text"
            name="new-color"
            maxlength="6"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default App;
