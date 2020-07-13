import React, { Component } from 'react';

export function App() {
  return (
    <React.Fragment>
      <Counter />
    </React.Fragment>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = {
      count: 0
    }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleMinusButton = () => {
    this.setState((state) => ({ count: state.count - 1 }));
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>increment</button>
        <button onClick={this.handleMinusButton}>decrement</button>
      </React.Fragment >
    )
  }
}