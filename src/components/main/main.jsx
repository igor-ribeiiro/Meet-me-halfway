import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import PersonAddress from '../PersonAddress/PersonAddress';
import '../../App.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <PersonAddress/>
        <PlacesList/>
      </div>
    );
  }
}

export default Main;
