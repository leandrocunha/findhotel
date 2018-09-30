import React from 'react';
import PropTypes from 'prop-types';
import Numeral from './Numeral';

const Comparison = ({ results }) => (
  <ul className="Comparison">
    {results.map(result => (
      <li className="Comparison__Result">
        <span className="Comparison__Result__Item">{result.channel}</span>
        <span className="Comparison__Result__Item">
          <Numeral value={result.value} />
        </span>
      </li>
    ))}
  </ul>
);

Comparison.propTypes = {
  results: PropTypes.instanceOf(Array).isRequired,
};

export default Comparison;
