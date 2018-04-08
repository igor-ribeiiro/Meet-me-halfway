import React, { Component } from 'react';

import "./places_list.css"
import MapContainer from '../map/map.jsx'

import cafe0 from './places-pic/cafe0.jpg';
import cafe1 from './places-pic/cafe1.jpg';
import cafe2 from './places-pic/cafe2.jpg';
import cafe3 from './places-pic/cafe3.jpg';
import cafe4 from './places-pic/cafe4.jpg';
import cafe5 from './places-pic/cafe5.jpg';
import cafe6 from './places-pic/cafe6.JPG';
import cafe7 from './places-pic/cafe7.JPG';
import cafe8 from './places-pic/cafe8.jpg';
import cafe9 from './places-pic/cafe9.jpg';
import cafe10 from './places-pic/cafe10.jpg';
import cafe11 from './places-pic/cafe11.jpg';
import cafe12 from './places-pic/cafe12.jpg';
import cafe13 from './places-pic/cafe13.jpg';
import cafe14 from './places-pic/cafe14.jpg';

let x;

class PlacesList extends Component {
  constructor(props) {
    super(props);
    this.cafes = [cafe0, cafe1, cafe2, cafe3, cafe4, cafe5, cafe6, cafe7, cafe8,
      cafe9, cafe10, cafe11, cafe12, cafe13, cafe14];

    this.getPlacesList = this.getPlacesList.bind(this);
    this.changeActivePlace = this.changeActivePlace.bind(this);
    this.state = {
      "activePlace": 0
    };
    x = this;
  }

  changeActivePlace(index) {
    this.setState({
      "activePlace": index
    })


  }

  getPlacesList(places) {
    let listItems;
    console.log(places);
    if(places !== undefined) {
      console.log("Crossed the undefined behavior");
      console.log(places[0]);
      listItems = places.map((place, i) =>
        <li key={place.name.toString()} onClick={() => x.changeActivePlace(i)}>
          <div className="media">
            <img className="d-flex align-self-start" src={x.cafes[place.index]} alt="Gatinho!"/>
            <div className="media-body pl-3">
              <span><i className="fa fa-apple"></i>{place.name}</span><br></br>
              <div className="stats">
                <span><i className="fa fa-car"></i>{place.tempo[0].text}, {place.dist[0].text}</span><br></br>
                <span><i className="fa fa-car"></i>{place.tempo[1].text}, {place.dist[1].text}</span><br></br>
                <span><i className="fa fa-car"></i>{place.tempo[2].text}, {place.dist[2].text}</span><br></br>
                <span><i className="fa fa-car"></i>{place.tempo[3].text}, {place.dist[3].text}</span><br></br>
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
                <MapContainer markers={this.props.markers} activePlace = {this.state.activePlace} places = {this.props.places}/>
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
