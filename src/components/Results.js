import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapOpen } from '../actions/search';
import Comparison from './Comparison';
import Grade from './Grade';
import Numeral from './Numeral';
import Rating from './Rating';
import ResultsImage from './ResultsImage';
import Tags from './Tags';

class Results extends Component {
  constructor(props) {
    super(props);
    this.showMap = this.showMap.bind(this);
  }

  showMap(coordinates) {
    const { dispatch } = this.props;
    dispatch(mapOpen(coordinates));
  }

  render() {
    const { results } = this.props;
    return (
      <div className="Results">
        {results.map(hotel => (
          <div className="Results__Result" key={hotel.id}>
            <ResultsImage {...hotel} />
            <div className="Results__Result__Data">
              <h2 className="Results__Result__Data__Name">{hotel.name}</h2>
              <Rating rate={hotel.rating} />
              <button
                className="Button Button--link Button--icon"
                id="btnShowMap"
                type="button"
                onClick={() => this.showMap(hotel.coordinates)}
              >
                <img src="images/pin.svg" />
                {`${hotel.distance}m to city centre`}
              </button>
              <Grade grade={hotel.grade} />
              <Tags tags={hotel.compliments} />
            </div>
            <div className="Results__Result__Prices">
              <p className="Results__Result__Prices__OriginalPrice">
                <Numeral value={hotel.originalPrice} />
              </p>
              <p className="Results__Result__Prices__Price">
                <Numeral value={hotel.price} />
              </p>
              {hotel.greatDeal && (
                <p className="Results__Result__Prices__FreeCancelation">Free cancelation</p>
              )}
              <button className="Button Button--buy" type="button">
                Booking now
              </button>
              <Comparison results={hotel.comparison} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Results.propTypes = {
  results: PropTypes.instanceOf(Array).isRequired,
};

export default connect()(Results);
