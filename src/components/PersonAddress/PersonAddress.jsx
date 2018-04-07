import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import SearchBar from '../SearchBar/SearchBar';

class PersonAddress extends Component {
    render(){
        return <SearchBar handleInput= {(lat, lng) => {alert("olá");}} />
    }
}

export default PersonAddress;