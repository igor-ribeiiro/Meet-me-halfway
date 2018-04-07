import React, { Component } from 'react';

import "./places_list.css"

import img1 from './gatinho1.jpeg';
import img2 from './gatinho2.jpg';
import img3 from './gatinho3.jpeg';


class PlacesList extends Component {
  constructor(props) {
    super(props);
    this.getPlacesList = this.getPlacesList.bind(this);
  }

  getPlacesList(places) {
    const listItems = places.map((place) =>
      <li key={place.name.toString()}>
        <img src={place.photo} alt="Smiley face"/>
        <h3>{place.name}</h3>
        <p>{place.address}</p>

      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  render() {
    let places = [
      {
        "name": "name1",
        "address": "rua 1",
        "photo": img1
      },
      {
        "name": "name2",
        "address": "rua 2",
        "photo": img2
      },
      {
        "name": "name3",
        "address": "rua 3",
        "photo": img3
      }
    ];

    return (
      <div className="PlacesList">
        {this.getPlacesList(places)}
      </div>
    );
  }
}

export default PlacesList;
