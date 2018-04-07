import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import Input from './components/input/input.jsx'
import Map from './components/map/map.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Input/>
        <Map/>

      </div>
    );
  }
}

export default App;
