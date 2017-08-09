import React, { Component } from 'react';
import './App.css';
import Widget from './components/Widget';

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: 'generic',
    }
    this.changeType = this.changeType.bind(this);
  }

  changeType(type) {
    this.setState({
      type,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Some {this.state.type} widgets!</h1>
        <Widget widgetType={this.state.type} />
        <Widget widgetType={this.state.type} />
        <Widget widgetType={this.state.type} />
        <Widget widgetType={this.state.type} />

      </div>
    );
  }
}

export default App;
