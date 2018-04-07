import React, { Component } from 'react';
import Input from '../input/input.jsx'
import Map from '../map/map.jsx'
import PlacesList from "../places_list/places_list";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Input/>
        <Map/>
        <PlacesList numbers={[1, 2, 3, 4, 5]}/>
      </div>
    );
  }
}

export default Main;
