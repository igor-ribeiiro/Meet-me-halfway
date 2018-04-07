import React, { Component } from 'react';

class PlacesList extends Component {
  constructor(props) {
    super(props);
    this.getPlacesList = this.getPlacesList.bind(this);
  }

  getPlacesList() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  render() {
    return (
      <div className="PlacesList">
        {this.getPlacesList()}


        <div>
          <ul>
            <li>
              <img src="http://lorempixum.com/100/100/nature/1" />
              <h3>Headline</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </li>

            <li>
              <img src="http://lorempixum.com/100/100/nature/2" />
              <h3>Headline</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </li>

            <li>
              <img src="http://lorempixum.com/100/100/nature/3" />
              <h3>Headline</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </li>

            <li>
              <img src="http://lorempixum.com/100/100/nature/4" />
              <h3>Headline</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </li>
          </ul>
        </div>



      </div>
    );
  }
}

export default PlacesList;
