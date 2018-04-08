import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import SearchBar from '../SearchBar/SearchBar';

class AddressContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "coord" : []
        };
    
         this.handleInput = this.handleInput.bind(this);
         this.handleTransport = this.handleTransport.bind(this);
    }

    handleInput(lat, lng, i) {
        this.props.handleInput(lat, lng, i);
        //window.globalPos.push({
            //lat: -23.59,
            //lng: -46.68
        //});
        //console.log(window.globalPos[0]);
    }

    handleTransport(mode, i){
        this.props.handleTransport(mode, i);
    }
    
    render(){
        return <SearchBar index = {this.props.index} handleInput= {this.handleInput} handleTransport = {this.handleTransport}/>
    }
}

export default AddressContainer;