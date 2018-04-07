import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import SearchBar from '../SearchBar/SearchBar';

class PersonAddress extends Component {
    render(){
        return <SearchBar handleInput= {(lat, lng) => {
        	window.globalLat[0] = lat; window.globalLon[0] = 0;
        	console.log(window.globalLat[0]);
        }} />
    }
}

export default PersonAddress;