---
title: React, State, and Lifecycle Methods
type: lesson
duration: "2:30"
creator:
    name: Vince Abruzzo
    modified by: J Silverstein
    city: NY
competencies: Programming
---


# React, State, and Lifecycle Methods

### Prerequisites

Students should be familiar with:

- React and React components
- Props and unidirectional data flow
- The immutability of props

### Learning Objectives

- Explain React state
- Describe the React component lifecycle
- Explain the most important lifecycle methods
- Implement a react component that fetches some data from the web
- Discuss React events

# React State

- **Props** are properties that one component passes to one of its child components. They only go in one direction, and they are _immutable_. 
- **State** allows us to add dynamic content to our components. Components can have local state that we can **set**. Every time a component's state changes, the component will re-render.

We declare state in our constructor, like this:

```jsx
import React, { Component } from 'react';

class MovieDiv extends Component {
constructor() {
    super();
    this.state = {
      title: null,
      releaseDate: null,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>The title is {this.state.title}.</h2>
      </div>
    );
  }
}
```

We update `state` with the built-in method `setState`. So, if we wanted to update the title in our `MovieDiv` component, we would say:

```jsx
this.setState({ title: 'Finding Nemo' });
```

Let's add this to a function in our `MovieDiv`.

```jsx
import React, { Component } from 'react';

class MovieDiv extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      releaseDate: null,
    };
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle() {
    this.setState({
      title: 'Finding Nemo';
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>The title is {this.state.title}.</h2>
        <button onClick={this.updateTitle}>Update!</button>
      </div>
    );
  }
}
```

(Note that we have to use `bind` to preserve the context of `this`.)

![state](./assets/state.jpg)

State is an object that React watches to decide when to update the DOM.

## 🚀 Lab 1

[stuff]

# Topic 2

[stuff]

## 🚀 Lab 2

# Recap!