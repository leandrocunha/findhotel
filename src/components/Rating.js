import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const createRating = (rate) => {
  const stars = [];

  for (let index = 0; index < 5; index++) {
    stars.push(
      <li className={classnames('Rating__Star', index < rate && 'Rating__Star--fill')}>{index}</li>,
    );
  }

  return stars;
};

const Rating = ({ rate }) => <ul className="Rating">{createRating(rate)}</ul>;

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
