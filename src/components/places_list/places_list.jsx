import React, { Component } from 'react';

import "./places_list.css"
import MapContainer from '../map/map.jsx'

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
        <div className="media">
          <div className="fav-box"><i className="fa fa-heart-o" aria-hidden="true"></i>
          </div>
          <img className="d-flex align-self-start" src={place.photo} alt="Gatinho!"/>
            <div className="media-body pl-3">
              <div className="price">{place.name}<small>{place.city}</small></div>
              <div className="stats">
                <span><i className="fa fa-arrows-alt"></i>1678 Sq ft</span>
                <span><i className="fa fa-bath"></i>2 Beadrooms</span>
              </div>
              <div className="address">{place.address}</div>
            </div>
        </div>
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
        "photo": img1,
        "city": "cidade1"
      },
      {
        "name": "name2",
        "address": "rua 2",
        "photo": img2,
        "city": "cidade2"
      },
      {
        "name": "name3",
        "address": "rua 3",
        "photo": img3,
        "city": "cidade3"
      },
      {
        "name": "name4",
        "address": "rua 4",
        "photo": img1,
        "city": "cidade4"
      }
    ];

    return (
      <div className="PlacesList">
        <section className="search-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 map-box mx-0 px-0">
                <MapContainer/>
              </div>
              <div className="col-md-12 listing-block">
                <ul>
                  {this.getPlacesList(places)}
                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PlacesList;
