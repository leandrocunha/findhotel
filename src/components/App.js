import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import Results from './Results';
import Sort from './Sort';
import { results as actionResults } from '../actions/search';

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
        <div>Filters</div>
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
