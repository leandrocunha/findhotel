import React from 'react';
import PropTypes from 'prop-types';

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
        </div>
      </div>
    ))}
  </div>
);

Results.propTypes = {
  results: PropTypes.instanceOf(Array).isRequired,
};

export default Results;
