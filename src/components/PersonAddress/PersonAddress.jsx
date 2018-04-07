import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import SearchBar from '../SearchBar/SearchBar';

class PersonAddress extends Component {
    render(){
        return <SearchBar handleInput= {(lat, lng) => {
          window.globalPos.push({
            lat: -23.59,
            lon: -46.68
          });
        	console.log(window.globalPos[0]);
        }} />
    }
}

export default PersonAddress;
