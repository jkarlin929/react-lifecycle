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
        <div>The title is {this.state.title}.</div>
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
      title: 'Finding Nemo',
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

### VERY IMPORTANT: How _not_ to update `state`

Never, ever, ever, _ever_ update `state` by saying something like:

```js
this.state.title = 'Finding Nemo';
```

Instead, you **MUST USE** the `setState` method, like we did above.

```js
this.setState({ title: 'Finding Nemo' });
```

We can also take a copy of the state object using _spread syntax_. For example, let's say instead of a string, the `title` property is an array: `[<h2>Star Wars</h2>, <h2>Finding Nemo</h2>]`. We want a new method that will add `Back to the Future` onto this array. In order to do this, we'll do something like this:

```jsx
addAnotherMovie() {
  const state = {...this.state};
  state.title.push(<h2>Back to the Future</h2>);
  this.setState(state);
}

```

(This is also helpful if you have a complex object in your state.)

![state](./assets/state.jpg)

`state` is an object that React watches to decide when to update the DOM.

## 🚀 Lab 1

[stuff]

# Topic 2

[stuff]

## 🚀 Lab 2

# Recap!