import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import AddressWrapper from '../AddressWrapper/AddressWrapper';
import AddressContainer from '../AddressContainer/AddressContainer';
import '../../App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "markers" : [],
      "coord" : []
    };

    this.handleInput = this.handleInput.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }

  Calculate(){
    if (this.state.coords.length < 4)
      alert("Missing address!");
    else
      var originList = [];
      for (var pos of this.state.coords) {
        originList.push({ lat: pos.lat, lng: pos.lng });
      }

      var destinationList = [];
      for (var cafe of window.cafes) {
        destinationList.push({ lat: cafe.lat, lng: cafe.lng });
      }

      var service = new window.googleHack.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: originList,
          destinations: destinationList,
          travelMode: 'DRIVING',
          unitSystem: window.googleHack.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, callback);

      var placesDistance = [];

      function callback(response, status) {
        if (status !== 'OK') {
          console.log('Error', status);
          return;
        }
        for (var cafe of window.cafes) {
          placesDistance.push({ name: cafe.desc, dist: [], tempo: [], address: null });
        }
        console.log(response);
        
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[i].elements;
             
          for (var j = 0; j < results.length; j++) {
             placesDistance[j].tempo.push(
              {text: results[j].duration.text, value: results[j].duration.value });
             placesDistance[j].dist.push(
              {text: results[j].distance.text, value: results[j].distance.value }); 
             placesDistance[j].address = destinationList[j];
          }
        }
        console.log(placesDistance);
      }

      alert("Calculate Here!");
  }

  handleInput(lat, lng, i) {
    this.setState((prevState, props) => {
        let currState = prevState;
        currState.coord[i] = {"lat": lat, "lng": lng};
        currState.markers[i] = {"name": i, "lat": lat, "lng": lng};
        return currState;
    })
  }


  render() {
    return (
      <div className="Main">
        <AddressWrapper onClick = {this.Calculate} handleInput = {this.handleInput}/>
        <PlacesList markers={this.state.markers}/>
      </div>
    )
  }
}

export default Main;
