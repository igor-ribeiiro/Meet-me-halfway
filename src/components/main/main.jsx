import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import AddressWrapper from '../AddressWrapper/AddressWrapper';
import AddressContainer from '../AddressContainer/AddressContainer';
import '../../App.css';
import img1 from '../places_list/gatinho1.jpeg';

let x;

class Main extends Component {
  constructor(props) {
    super(props);

    x = this;

    this.state = {
      "markers" : [],
      "coord" : [],
      "places": undefined
    };

    this.handleInput = this.handleInput.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }

  Calculate() {
    if (this.state.coord.length < 4) {
      alert("Missing address!");
      return;
    }

    var originList = [];
    for (var pos of this.state.coord) {
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
      for (var i in window.cafes) {
        placesDistance.push({ index: i, name: window.cafes[i].desc, lat: window.cafes[i].lat, lng: window.cafes[i].lng, dist: [], tempo: [], address: null });
      }

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

      // sort using most distance as reference
      placesDistance.sort(function(a, b) {
        var maxA = 0;
        var maxB = 0;

        // get maximum
        for (var t of a.tempo) {
          maxA = Math.max(maxA, t.value);
        }

        for (var t of b.tempo) {
          maxB = Math.max(maxB, t.value);
        }
        return maxA - maxB;
      });
      x.setState({
        "places": placesDistance
      });
    }

    alert("Calculate Here!");


    window.directionsService.route({
      origin: {
        lat: -23.5705200,
        lng: -46.6333090
      },
      destination: {
        lat: -23.5505200,
        lng: -46.6133090
      },
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        window.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

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
        <PlacesList markers={this.state.markers} places={this.state.places}/>
      </div>
    )
  }
}

export default Main;
