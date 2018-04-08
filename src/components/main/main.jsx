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
      "transport": ["car", "car", "car", "car"],
      "markers" : [],
      "coord" : [],
      "places": undefined,
      "loading": false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleTransport = this.handleTransport.bind(this);
    this.Calculate = this.Calculate.bind(this);

  }

  handleTransport(mode, i) {
    this.setState((prevState, props) => {
        let currState = prevState;
        currState.transport[i] = mode;
        return currState;
    })
  } 

  Calculate() {
    if (this.state.coord.length < 4) {
      alert("Missing address!");
      return;
    }
    this.setState({"loading": true});

    var originList = [];
    for (var pos of this.state.coord) {
      originList.push({ lat: pos.lat, lng: pos.lng });
    }

    var destinationList = [];
    for (var cafe of window.cafes) {
      destinationList.push({ lat: cafe.lat, lng: cafe.lng });
    }

    var placesDistance = [];
    for (var i in window.cafes) {
      placesDistance.push({ index: i, name: window.cafes[i].desc, lat: window.cafes[i].lat, lng: window.cafes[i].lng, dist: [], tempo: [], address: null });
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
      }, drivingCallback);
    
    function drivingCallback(response, status) {
      if (status !== 'OK') {
        console.log('Error', status);
        return;
      }

      var _originList = response.originAddresses;
      var _destinationList = response.destinationAddresses;
      for (var i = 0; i < _originList.length; i++) {
        var results = response.rows[i].elements;
        if (x.state.transport[i] !== 'car') continue;

        for (var j = 0; j < results.length; j++) {
          if (results[j].status !== 'OK') {
            placesDistance[j].tempo.push({text: 'Not found', value: 1000000 });
            placesDistance[j].dist.push({text: 'Not found', value: 1000000 });
            placesDistance[j].address = 'Not found';
            continue;
          }

          placesDistance[j].tempo.push(
            {text: results[j].duration.text, value: results[j].duration.value });
          placesDistance[j].dist.push(
            {text: results[j].distance.text, value: results[j].distance.value });
          placesDistance[j].address = _destinationList[j];
        }
      }

      setTimeout(function() {
        service.getDistanceMatrix(
        {
          origins: originList,
          destinations: destinationList,
          travelMode: 'TRANSIT',
          unitSystem: window.googleHack.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, transitCallback);  
      }, 3000);
    }

    function transitCallback(response, status) {
      if (status !== 'OK') {
        console.log('Error', status);
        return;
      }
      console.log('called');

      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;
      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        if (x.state.transport[i] !== 'bus') continue;

        for (var j = 0; j < results.length; j++) {
          if (results[j].status !== 'OK') {
            placesDistance[j].tempo.push({text: 'Not found', value: 1000000 });
            placesDistance[j].dist.push({text: 'Not found', value: 1000000 });
            placesDistance[j].address = 'Not found';
            continue;
          }

          placesDistance[j].tempo.push(
            {text: results[j].duration.text, value: results[j].duration.value });
          placesDistance[j].dist.push(
            {text: results[j].distance.text, value: results[j].distance.value });
          placesDistance[j].address = destinationList[j];
        }
      }

      console.log(placesDistance);
      // sort using most distance as reference
      placesDistance.sort(function(a, b) {
        var maxA = [];
        var maxB = [];

        // get maximum
        for (var t of a.tempo) {
          maxA.push(t.value);
        }

        for (var t of b.tempo) {
          maxB.push(t.value);
        }
        maxA.sort(function(a, b) {
          return b-a;
        });
        maxB.sort(function(a, b) {
          return b-a;
        });

        for (var i in maxA) {
          if (maxA[i] > maxB[i] + 60) return 1;
          if (maxB[i] > maxA[i] + 60) return -1;
        }
        return b.index - a.index;
      });
      x.setState({
        "places": placesDistance,
        "loading": false
      });
    }
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
        <AddressWrapper onClick = {this.Calculate} handleInput = {this.handleInput} handleTransport = {this.handleTransport}/>
        <PlacesList markers={this.state.markers} places={this.state.places} transport = {this.state.transport}
                    loading={this.state.loading}/>
      </div>
    )
  }
}

export default Main;
