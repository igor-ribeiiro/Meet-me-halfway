import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input.jsx'

class App extends Component {



  render() {
    let a = 2;
    return (
      <div className="App">
          <Input/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code>  and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
