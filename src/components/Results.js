import React from 'react';
import PropTypes from 'prop-types';
import Numeral from './Numeral';
import Rating from './Rating';
import Tags from './Tags';

const Results = ({ results }) => (
  <div className="Results">
    {results.map(hotel => (
      <div className="Results__Result" key={hotel.id}>
        <div
          className="Results__Result__Image"
          style={{ backgroundImage: `url('${hotel.image}')` }}
        >
          <img alt={hotel.name} src={hotel.image} />
        </div>
        <div className="Results__Result__Data">
          <h2 className="Results__Result__Data__Name">{hotel.name}</h2>
          <Rating rate={hotel.rating} />
          <Tags tags={hotel.compliments} />
        </div>
        <div className="Results__Result__Prices">
          <p className="Results__Result__Prices__Price">
            <Numeral value={hotel.price} />
          </p>
          <button className="Results__Result__Prices__Button" type="button">
            Booking now
          </button>
        </div>
      </div>
    ))}
  </div>
);

Results.propTypes = {
  results: PropTypes.instanceOf(Array).isRequired,
};

export default Results;
