import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import AddressWrapper from '../AddressWrapper/AddressWrapper';
import AddressContainer from '../AddressContainer/AddressContainer';
import '../../App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "markers" : [],
      "coord" : []
    };

    this.handleInput = this.handleInput.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }

  Calculate(){
    if (this.state.coords.length < 4)
      alert("Missing address!");
    else
      alert("Calculate Here!");
  }

  handleInput(lat, lng, i) {
    this.setState((prevState, props) => {
        let currState = prevState;
        currState.coord[i] = {"lat": lat, "lng": lng};
        currState.markers[i] = {"name": i, "lat": lat, "lng": lng};
        return currState;
    })
  }


  render() {
    return (
      <div className="Main">
        <AddressWrapper onClick = {this.Calculate} handleInput = {this.handleInput}/>
        <PlacesList markers={this.state.markers}/>
      </div>
    )
  }
}

export default Main;
