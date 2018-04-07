import React, { Component } from 'react';
import Input from '../input/input.jsx'
import Map from '../map/map.jsx'
import PlacesList from "../places_list/places_list";
import PersonAddress from '../PersonAddress/PersonAddress';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <PersonAddress/>
        <Map/>
        <PlacesList numbers={[1, 2, 3, 4, 5]}/>
      </div>
    );
  }
}

export default Main;
