import React, { Component } from 'react';
import Container from './components/Container.js';

class App extends Component {
  state = {
    numOfVisitors: 0
  }

  addVisitors = () => {
    let newNumOfVisitors = this.state.numOfVisitors + 1
    this.setState({
      numOfVisitors: newNumOfVisitors
    });
  }
  resetVisitors = () => {
    let newNumOfVisitors = 0
    this.setState({
      numOfVisitors: newNumOfVisitors
    });
  }
  render() {
    return (
      <div className="App">
        <Container addVisitors={this.addVisitors} resetVisitors ={this.resetVisitors} numOfVisitors = {this.state.numOfVisitors}/>
      </div>
    );
  }
}

export default App;
