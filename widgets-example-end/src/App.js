import React, { Component } from 'react';
import './App.css';
import Widget from './components/Widget';
import ChangeWidget from './components/ChangeWidget';

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: 'generic',
    };
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
        <h1>
          My {this.state.type} widget!
        </h1>
        <div className="widget-container">
          <Widget widgetType={this.state.type} />
        </div>
        <div className="widget-buttons">
          <ChangeWidget changeType={this.changeType} newType={'happy'} />
          <ChangeWidget changeType={this.changeType} newType={'NASA'} />
          <ChangeWidget changeType={this.changeType} newType={'sad'} />
        </div>
      </div>
    );
  }
}

export default App;
