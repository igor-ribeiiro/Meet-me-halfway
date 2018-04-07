import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import AddressWrapper from '../AddressWrapper/AddressWrapper';
import AddressContainer from '../AddressContainer/AddressContainer';
import '../../App.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.markers = [
      {
        "name" : "Dolores park",
        "lat": -23.5705200,
        "lng": -46.6333090
      },
      {
        "name" : "Nome 2",
        "lat": -24.5705200,
        "lng": -47.6333090
      }
    ];
  }

  Calculate(coords){
    if (coords.length < 4)
      alert("Missing address!");
    else
      alert("Calculate Here!");
  }


  render() {
    return (
      <div className="Main">
        <AddressWrapper onClick = {this.Calculate}/>
        <PlacesList markers={this.markers}/>
      </div>
    )
  }
}

export default Main;
