import React, { Component } from 'react';
import "./header.css"
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to When2meet</h1>
        </header>
        <p className="App-intro">
          To get started, type 4 pos
        </p>
      </div>
    );
  }
}

export default Header;
