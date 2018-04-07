import React, { Component } from 'react';
import "./map.css"

class Map extends Component {
  constructor(props) {
    super(props);
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
