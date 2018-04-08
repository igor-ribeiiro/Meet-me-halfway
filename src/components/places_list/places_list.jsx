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
    this.changeActivePlace = this.changeActivePlace.bind(this);
    this.state = {
      "activePlace": 0
    }
  }

  changeActivePlace(index) {
    this.setState({
      "activePlace": index
    })


  }

  getPlacesList(places) {
    let listItems;
    if(places !== undefined) {
      listItems = places.map((place, i) =>
        <li key={place.name.toString()} onClick={() => this.changeActivePlace(i)}>
          <div className="media">
            <img className="d-flex align-self-start" src={place.photo} alt="Gatinho!"/>
            <div className="media-body pl-3">
              <span><i className="fa fa-apple"></i>{place.name}</span><br></br>
              <div className="stats">
                <span><i className="fa fa-car"></i>{place.tempo1} minutos, {place.dist1} km</span><br></br>
                <span><i className="fa fa-car"></i>{place.tempo2} minutos, {place.dist2} km</span><br></br>
                <span><i className="fa fa-car"></i>{place.tempo3} minutos, {place.dist3} km</span><br></br>
                <span><i className="fa fa-car"></i>{place.tempo4} minutos, {place.dist4} km</span><br></br>
              </div>
              <div className="address">{place.address}</div>
            </div>
          </div>
        </li>
      );
    }
    return (
      <ul>{listItems}</ul>
    );
  }

  render() {
    return (
      <div className="PlacesList">
        <section className="search-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 map-box mx-0 px-0">
                <MapContainer markers={this.props.markers}/>
              </div>
              <div className="col-md-12 listing-block">
                <ul>
                  {this.getPlacesList(this.props.places)}
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
