import React, { Component } from 'react';

import axios from 'axios';
import NASA_KEY from './key'

class Widget extends Component {
  constructor() {
    super();
    this.state = {
      nasa: null,
    }
  }
  componentWillReceiveProps(props) {
    if (props.widgetType === 'NASA' && !this.state.nasa) {
      this.getNasa();
    }
  }

  getNasa() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          nasa: res.data,
        })
      })
  }

  showNasa() {
    return (
      <img src={this.state.nasa.url} />
    )
  }

  render() {
    return (
      <div className={`${this.props.widgetType} widget`}>
        This is a {this.props.widgetType} widget.
        {(this.state.nasa && this.props.widgetType === 'NASA') ? this.showNasa() : ''}
      </div>
    );
  }
}

export default Widget;
