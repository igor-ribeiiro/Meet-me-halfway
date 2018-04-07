import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Map from './components/map/map.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
