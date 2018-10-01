import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { gradeAsText, slug } from '../utils';

const Grade = ({ grade }) => (
  <p className={classnames('Grade', `Grade--${slug(gradeAsText(grade))}`)}>
    {`${grade} ${gradeAsText(grade)}`}
  </p>
);

Grade.propTypes = {
  grade: PropTypes.number.isRequired,
};

export default Grade;
