import React, { Fragment } from 'react';

const Numeral = props => (
  <Fragment>{props.value.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' })}</Fragment>
);

export default Numeral;
