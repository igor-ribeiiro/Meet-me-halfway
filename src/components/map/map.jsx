import React, { Component } from 'react';
import "./map.css"

class Map extends Component {

  initMap() {
    let uluru = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  render() {
    return (
      <div>
        <h3>My Google Maps Demo</h3>
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;
