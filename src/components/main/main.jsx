import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import PersonAddress from '../PersonAddress/PersonAddress';
import '../../App.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <br></br>
        <div class="row">
          <div class="col-md-6">
            <PersonAddress/>
          </div>
          <div class="col-md-6">
            <PersonAddress/>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-6">
            <PersonAddress/>
          </div>
          <div class="col-md-6">
            <PersonAddress/>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-12">
            <PlacesList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
