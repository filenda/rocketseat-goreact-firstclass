import React, { Component, Fragment } from 'react'; //  this 'fragment' component should wrap every component's return content
import { render } from 'react-dom';
import Button from './Button';

import './style.scss';

class App extends Component {
  //  whenever a property of the state is altered, the method
  // 'render()' runs again
  state = {
    counter: 0,
  };

  componentDidMount() {}

  //  every function  inside of a class that is not equal to
  //  a default react function (e.g. 'render()') should use
  //  the arrow function format
  handleClick = () => {
    //  the state is immutable and thus you can't alter it's properties values
    //  as you normally would in plain javascript. This function
    //  runs asyncronously and it has a callback in case you need
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });

    this.setState({ counter: this.state.counter + 1 });

    //  react keeps a queue of states to be altered. Bellow, you
    //  can find how to alter objects directly from the queue instead
    //  of the state from the current class (see bellow comment)
    //this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <Fragment>
        <h1>Hello RocketSeat</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
