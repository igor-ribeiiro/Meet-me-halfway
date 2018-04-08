import React, { Component } from 'react';
import "./header.css"
import logo from './logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="header">
        <a className="logo">Meet me halfway!</a>
      </header>
    );
  }
}

// render() {
//   return (
//     <div>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to When2meet</h1>
//       </header>
//       <p className="App-intro">
//         To get started, type 4 positions
//       </p>
//     </div>
//   );
// }
export default Header;
