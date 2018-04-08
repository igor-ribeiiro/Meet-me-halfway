import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import SearchBar from '../SearchBar/SearchBar';
import AddressContainer from '../AddressContainer/AddressContainer';
import '../../App.css';


class AddressWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "coord" : [],
            "transport" : []
        };

         this.handleInput = this.handleInput.bind(this);
         this.handleTransport = this.handleTransport.bind(this);
    }

    handleInput(lat, lng, i) {
        //alert("Deu certo!");
        this.props.handleInput(lat, lng, i);
    }

    handleTransport(mode, i){
        this.props.handleTransport(mode, i);
    }

    render(){
        return (
            <div>
                <div class="row">
                    <div class="col-md-6">
                      <AddressContainer index = {0} handleInput = {this.handleInput} handleTransport = {this.handleTransport}/>
                    </div>
                    <div class="col-md-6">
                      <AddressContainer index = {1} handleInput = {this.handleInput} handleTransport = {this.handleTransport}/>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-md-6">
                      <AddressContainer index = {2} handleInput = {this.handleInput} handleTransport = {this.handleTransport}/>
                    </div>
                    <div class="col-md-6">
                      <AddressContainer index = {3} handleInput = {this.handleInput} handleTransport = {this.handleTransport}/>
                    </div>
                  </div>
                <button className="btn" onClick = {() => {this.props.onClick();}}>
                    Calculate!
                </button>
            </div>
        );
    }
}

export default AddressWrapper;
