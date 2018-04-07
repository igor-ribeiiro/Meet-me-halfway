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
                <div class="row">
                    <div class="col-md-6">
                      <AddressContainer index = {0} handleInput = {this.handleInput}/>
                    </div>
                    <div class="col-md-6">
                      <AddressContainer index = {1} handleInput = {this.handleInput}/>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-md-6">
                      <AddressContainer index = {2} handleInput = {this.handleInput}/>
                    </div>
                    <div class="col-md-6">
                      <AddressContainer index = {3} handleInput = {this.handleInput}/>
                    </div>
                  </div>
                <button onClick = {() => {this.props.onClick(this.state.coord);}}>
                    Calculate!
                </button>
            </div>
        );
    }
}

export default AddressWrapper;
