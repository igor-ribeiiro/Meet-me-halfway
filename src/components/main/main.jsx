import React, { Component } from 'react';
import Input from '../input/input.jsx'
import MapContainer from '../map/map.jsx'
import PlacesList from "../places_list/places_list";
import PersonAddress from '../PersonAddress/PersonAddress';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <PersonAddress/>
        <PlacesList/>
        <MapContainer/>
      </div>
    );
  }
}

export default Main;
