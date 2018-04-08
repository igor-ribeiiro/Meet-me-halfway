import React, { Component } from 'react';
import PlacesList from "../places_list/places_list";
import AddressWrapper from '../AddressWrapper/AddressWrapper';
import AddressContainer from '../AddressContainer/AddressContainer';
import '../../App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.markers = [
      {
        "name" : "Dolores park",
        "lat": -23.5705200,
        "lng": -46.6333090
      },
      {
        "name" : "Nome 2",
        "lat": -24.5705200,
        "lng": -47.6333090
      }
    ];
  }

  Calculate(coords){
    if (coords.length < 4)
      alert("Missing address!");
    else
      var originList = [];
      for (var pos of coords) {
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


  render() {
    return (
      <div className="Main">
        <AddressWrapper onClick = {this.Calculate}/>
        <PlacesList markers={this.markers}/>
      </div>
    )
  }
}

export default Main;
