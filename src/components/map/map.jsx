import React, { Component } from 'react';
import "./map.css"

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

var originIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_spin&chld=0.45|0|16A085|13|_|O';

var originSelectedIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=O|FFFF42|000000';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.getMarkerList = this.getMarkerList.bind(this);

    window.googleHack = this.props.google;
  }

  getMarkerList(markers) {
    const listItems = markers.map((marker) =>
        <Marker
          key={marker.name.toString()}
          name={marker.name.toString()}
          position={{
            lat: marker.lat,
            lng: marker.lng
          }}
        />
    );

    return (
      listItems
    );
  }

  getPlacesList(places) {
    let listItems = null;
    if (places !== undefined)
    {
        listItems = places.map((place) =>
        {
          if(place.index < 3) {
            if (place.index == this.props.activePlace)
            {
              return(
                <Marker
                  key = {place.name.toString()}
                  position ={{
                    lat: place.lat,
                    lng: place.lng
                  }}
                  icon = {originSelectedIcon}
                />
              )
            }
            else
            {
              return(
                <Marker
                  key = {place.name.toString()}
                  position ={{
                    lat: place.lat,
                    lng: place.lng
                  }}
                  icon = {originIcon}
                  onClick = {() => {this.props.changeActive(place.index);}}
                />
              )
            }
          }
      })
    }

    return listItems;
  }

  render() {
    const markers = this.getMarkerList(this.props.markers);
    const places = this.getPlacesList(this.props.places);

    return (
      <Map google={this.props.google}
                  initialCenter={{
                    lat: -23.5505200,
                    lng: -46.6333090
                  }}
                  zoom={13}>

        {markers}
        {places}

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>ssssdd</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyAaVZuqrJbAYSsLNqHoHPpz1TvJr83shHE"
})(MapContainer)
