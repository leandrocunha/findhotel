import React, { Fragment } from 'react';

/**
 * Dumb component to render number as currency in dutch format.
 * @todo Move function formater to util and add possibility
 * to format and more locale formats.
 */
const Numeral = props => (
  <Fragment>{props.value.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' })}</Fragment>
);

export default Numeral;
