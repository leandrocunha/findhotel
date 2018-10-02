import React from 'react';
import PropTypes from 'prop-types';

/** Dumb component to render a list of feature of results like tags. */
const Tags = ({ tags }) => (
  <ul className="Tags">
    {tags.map(tag => (
      <li key={tag} className="Tags__Tag">
        {tag}
      </li>
    ))}
  </ul>
);

Tags.propTypes = {
  tags: PropTypes.instanceOf(Array).isRequired,
};

export default Tags;
