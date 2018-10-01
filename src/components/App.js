import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/search';
import Filters from './Filters';
import GMaps from './GMaps';
import Loading from './Loading';
import Modal from './Modal';
import Results from './Results';
import Sort from './Sort';

class App extends Component {
  constructor(props) {
    super(props);
    this.greatDealSize = this.greatDealSize.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(() => dispatch(actions.results()), 1000);
  }

  greatDealSize(results) {
    return results.length ? results.filter(r => r.greatDeal).length : 0;
  }

  toggleFilter() {
    const { dispatch } = this.props;
    dispatch(actions.toggleFilter());
  }

  render() {
    const { loading, results, map } = this.props;
    return (
      <Fragment>
        <header className="Header">
          <h1 className="Header__Brand">FindHotel - Best prices Guarantee</h1>
          <button className="Button Button--filter" onClick={this.toggleFilter} type="button">
            <img alt="Filter" src="images/filter.svg" />
          </button>
        </header>
        <Filters />
        <Sort greatDeal={this.greatDealSize(results)} total={results.length} />
        {loading ? <Loading /> : <Results results={results} />}
        {map && (
          <Modal>
            <GMaps isMarkerShown {...map.coordinates} />
          </Modal>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
