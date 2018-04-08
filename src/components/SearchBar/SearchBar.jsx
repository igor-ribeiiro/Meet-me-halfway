import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import '../../App.css'

const renderSuggestion = ({ formattedSuggestion }) => (
    <div className="suggestion-item">
      <i className="fa fa-map-marker Demo__suggestion-icon" />
      <strong>{formattedSuggestion.mainText}</strong>{' '}
      <small className="text-muted">{formattedSuggestion.secondaryText}</small>
    </div>
  );
  /* eslint-enable react/prop-types */
  
  
  const cssClasses = {
    root: 'search-bar',
    input: 'Demo__search-input',
    autocompleteContainer: 'autocomplete-container',
  };
  
  const shouldFetchSuggestions = ({ value }) => value.length > 2;
  
  const onError = (status, clearSuggestions) => {
    /* eslint-disable no-console */
    console.log(
      'Error happened while fetching suggestions from Google Maps API',
      status
    );
    /* eslint-enable no-console */
    clearSuggestions();
  };
  
  class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        address: '',
        geocodeResults: null,
        loading: false,
      };
  
      this.handleSelect = this.handleSelect.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleSelect(address) {
      this.setState({
        address,
        loading: true,
      });
  
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          this.props.handleInput(lat, lng, this.props.index);
          // console.log('Geocode Success', { lat, lng }); // eslint-disable-line no-console
          this.setState({
            geocodeResults: null,
            loading: false,
          });
        })
        .catch(error => {
          console.log('Geocode Error', error); // eslint-disable-line no-console
          this.setState({
            geocodeResults: this.renderGeocodeFailure(error),
            loading: false,
          });
        });
    }
  
    handleChange(address) {
      this.setState({
        address,
        geocodeResults: null,
      });
    }
  
    renderGeocodeFailure(err) {
      return (
        <div className="alert alert-danger" role="alert">
          <strong>Error!</strong> {err}
        </div>
      );
    }
  
    render() {
      const inputProps = {
        type: 'text',
        value: this.state.address,
        onChange: this.handleChange,
        onBlur: () => {
          // console.log('Blur event!'); // eslint-disable-line no-console
        },
        onFocus: () => {
          // console.log('Focused!'); // eslint-disable-line no-console
        },
        autoFocus: true,
        placeholder: 'Search Places',
        name: 'Demo__input',
        id: 'my-input-id',
      };
  
      return (
        <div>
          <PlacesAutocomplete
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            classNames={cssClasses}
            onSelect={this.handleSelect}
            onEnterKeyDown={this.handleSelect}
            onError={onError}
            shouldFetchSuggestions={shouldFetchSuggestions}
          />
          {this.state.loading && (
            <div>
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" />
            </div>
          )}
          {this.state.geocodeResults && (
            <div className="geocoding-results">{this.state.geocodeResults}</div>
          )}
        </div>
      );
    }
  }
  
  export default SearchBar;