import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { results as actionResults } from '../actions/search';
import Filters from './Filters';
import Loading from './Loading';
import Results from './Results';
import Sort from './Sort';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(() => dispatch(actionResults()), 1000);
  }

  render() {
    const { loading, results } = this.props;
    return (
      <Fragment>
        <header className="Header">
          <h1 className="Header__Brand">FindHotel - Best prices Guarantee</h1>
        </header>
        <Filters />
        <Sort
          greatDeal={results.length ? results.filter(r => r.greatDeal).length : 0}
          total={results.length}
        />
        {loading ? <Loading /> : <Results results={results} />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
