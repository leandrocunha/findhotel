import React from 'react';
import PropTypes from 'prop-types';

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
