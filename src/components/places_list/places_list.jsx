import React, { Component } from 'react';

class PlacesList extends Component {
  constructor(props) {
    super(props);
    this.NumberList = this.NumberList.bind(this);
  }

  NumberList() {
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
        {this.NumberList()}
      </div>
    );
  }
}

export default PlacesList;
