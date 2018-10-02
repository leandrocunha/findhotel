import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * @function createRating Tranforme the rate value in stars representation.
 * @param {number} rate - The value of user rate to be transformed.
 * @returns A list of li elements with stars icons filled or not.
 *  @todo Move it to utils to keep this component clean
 *  @example createRating(4)
 */
const createRating = (rate) => {
  const stars = [];

  for (let index = 0; index < 5; index++) {
    stars.push(
      <li key={index} className={classnames('Rating__Star', index < rate && 'Rating__Star--fill')}>
        {index}
      </li>,
    );
  }

  return stars;
};

/** Dumb component to render a unordered list of stars icon to represent user rate. */
const Rating = ({ rate }) => <ul className="Rating">{createRating(rate)}</ul>;

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
