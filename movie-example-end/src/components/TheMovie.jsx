import React, {Component} from 'react';

class TheMovie extends Component {
  
  componentWillReceiveProps() {
    console.log('subcomponent will receive props');
  }

  componentWillUpdate() {
    console.log('subcomponent will update');
  }

  componentDidUpdate() {
    console.log('subcomponent did update');
  }

  render() {
    console.log('subcomponent render');
    return (
      <div>
        The movie is {this.props.title}.
      </div>
    )
  }
}

export default TheMovie;