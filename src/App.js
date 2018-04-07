import React, { Component } from 'react';
import './App.css';
import Input from './components/input/input.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx';
import AddressWrapper from './components/AddressWrapper/AddressWrapper.jsx';
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
