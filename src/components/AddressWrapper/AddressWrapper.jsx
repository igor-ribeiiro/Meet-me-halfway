import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import SearchBar from '../SearchBar/SearchBar';
import AddressContainer from '../AddressContainer/AddressContainer';

class AddressWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "coord" : []
        };
    
         this.handleInput = this.handleInput.bind(this);
    }

    handleInput(lat, lng, i) {
        //alert("Deu certo!");
        this.setState((prevState, props) => {
            let currState = prevState;
            currState.coord[i] = {"lat": lat, "lng": lng};
            return currState;
        })
    }

    

    render(){
        return (
            <div>
                <AddressContainer index = {0} handleInput = {this.handleInput}/>
                <AddressContainer index = {1} handleInput = {this.handleInput}/>
                <AddressContainer index = {2} handleInput = {this.handleInput}/>
                <AddressContainer index = {3} handleInput = {this.handleInput}/>
                <button onClick = {() => {this.props.onClick(this.state.coord);}}>
                    Calculate!
                </button>
            </div>
        );
    }
}

export default AddressWrapper;
