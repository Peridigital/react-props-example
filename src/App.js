import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'

class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [
        'aaron',
        'brent',
        'alex',
        'sean',
        'matt'
      ],
      notUsers: [
        'I AM NOT A USER',
        'AAAAAAAAAAAAA'
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <h1>CHILD 1</h1>
        <Child usersArray={this.state.users} banana='AAAAAA' anyNameWeWant={{test: 'test'}}/>
        <h1>CHILD 2</h1>
        <Child usersArray={this.state.notUsers}/>
      </div>
    );
  }
}

export default App;
