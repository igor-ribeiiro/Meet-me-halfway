import React, { Component } from 'react';
import './loader.css';

let x;

class Loader extends Component {
  constructor(props) {
    super(props);

    x = this;

    this.state = {
      "loading": "loading"
    };

    this.loading = this.loading.bind(this);
  }

  loading() {
    const prevState = this.state.loading;
    if(this.state.loading == "loading...") {
      this.setState({
        "loading": "loading"
      })
    }
    else {
      this.setState({
        "loading": prevState + "."
      })
    }
  }

  render() {
    setTimeout(function() {
      x.loading();
    }, 500);
    return (
      <div className={"loading"}>
        <div className="loader"></div>
        <span>{this.state.loading}</span>
      </div>
    );
  }
}

export default Loader;
