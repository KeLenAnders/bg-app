import React, { Component } from 'react';
import logo from './logo.svg';
import MsgElement from './components/msgElement';
import GreetingElement from './components/greetingElement'

import './App.css';

export default class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    msg1:'hello Thing 1',
    msg2:'hello world 2',
    lastName: 3,
  };
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MsgElement msg={this.state.msg1}/>
          <MsgElement msg={this.state.msg2}/>
          <GreetingElement firstName='Lacy' lastName={this.state.lastName}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}