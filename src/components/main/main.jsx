import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import AddressWrapper from '../AddressWrapper/AddressWrapper';
import '../../App.css';

class Main extends Component {
  Calculate(coords){
    console.log(coords.length);
    if (coords.length < 4)
      alert("Missing address!");
    else
      alert("Calculate Here!");
  }

  render() {
    return (
      <div className="Main">
        <AddressWrapper onClick = {this.Calculate}/>
        <PlacesList/>
      </div>
    );
  }
}

export default Main;
