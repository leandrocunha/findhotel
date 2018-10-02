import React from 'react';
import PropTypes from 'prop-types';
import Favorite from './Favorite';
import Ribbon from './Ribbon';

/** Dumb component to render cover image as a background of parent div. */
const ResultsImage = ({ greatDeal, image, name }) => (
  <div className="ResultsImage" style={{ backgroundImage: `url('${image}')` }}>
    <img className="ResultsImage__Original" alt={name} src={image} />
    {greatDeal && <Ribbon />}
    <Favorite />
  </div>
);

ResultsImage.defaultProps = {
  greatDeal: false,
};

ResultsImage.propTypes = {
  greatDeal: PropTypes.bool,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ResultsImage;
