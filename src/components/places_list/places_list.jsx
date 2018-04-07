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
        <div className="media">
          <div className="fav-box"><i className="fa fa-heart-o" aria-hidden="true"></i>
          </div>
          <img className="d-flex align-self-start" src={place.photo} alt="Gatinho!"/>
            <div className="media-body pl-3">
              <div className="price">{place.name}<small>{place.address}</small></div>
              <div className="stats">
                <span><i className="fa fa-arrows-alt"></i>1678 Sq ft</span>
                <span><i className="fa fa-bath"></i>2 Beadrooms</span>
              </div>
              <div className="address">4062 Walnut Hill Drive
                Cincinnati</div>
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
      },
      {
        "name": "name4",
        "address": "rua 4",
        "photo": img1
      }
    ];

    return (
      <div className="PlacesList">
        <section className="search-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 map-box mx-0 px-0">
                <iframe width="100%" height="495" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
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
