import React, { Fragment } from 'react';
import results from '../mock';
import Results from './Results';
import Sort from './Sort';

const App = () => (
  <Fragment>
    <header className="Header">
      <h1 className="Header__Brand">FindHotel - Best prices Guarantee</h1>
    </header>
    <div>Filters</div>
    <Sort />
    <Results results={results} />
  </Fragment>
);

export default App;
