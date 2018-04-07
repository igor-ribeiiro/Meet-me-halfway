import React, { Component } from 'react';
import "./map.css"

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
                  initialCenter={{
                    lat: -23.5505200,
                    lon: -46.6333090
                  }}
                  zoom={13}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <Marker
          name={'Dolores park'}
          position={{
            lat: -23.5705200,
            lon: -46.6333090
          }} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>ssss</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyAaVZuqrJbAYSsLNqHoHPpz1TvJr83shHE"
})(MapContainer)
