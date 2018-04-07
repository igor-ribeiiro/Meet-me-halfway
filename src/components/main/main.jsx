import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import AddressWrapper from '../AddressWrapper/AddressWrapper';
import AddressContainer from '../AddressContainer/AddressContainer';
import '../../App.css';

class Main extends Component {


  Calculate(coords){
    if (coords.length < 4)
      alert("Missing address!");
    else
      alert("Calculate Here!");
  }


  render() {
    return (
      <div className="Main">
<<<<<<< HEAD
        <br></br>
        <div class="row">
=======
        <AddressWrapper onClick = {this.Calculate}/>
        <PlacesList/>
        {/* <div class="row">
>>>>>>> 78efad1fbc75eab9168e136eec35e818743aed5c
          <div class="col-md-6">
            <AddressContainer/>
          </div>
          <div class="col-md-6">
            <AddressContainer/>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-6">
            <AddressContainer/>
          </div>
          <div class="col-md-6">
            <AddressContainer/>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-12">
            <PlacesList/>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Main;
