import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/search';
import Filters from './Filters';
import GMaps from './GMaps';
import Loading from './Loading';
import Modal from './Modal';
import Notifier from './Notifier';
import Results from './Results';
import Sort from './Sort';

class App extends Component {
  constructor(props) {
    super(props);

    /** Bind greatDealSize function, return the total of results with great deal. */
    this.greatDealSize = this.greatDealSize.bind(this);

    /** Bind toggleFilter function to open/close mobile filter. */
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    /** On componentDidMount wait a second to simulate a API call and dispatch
     * a action to retrieve results.
     */
    setTimeout(() => dispatch(actions.results()), 1000);
  }

  /**
   * @function greatDealSize - Retrieve the total of results with great deal size.
   * @param {Array} results - A array with results to be count.
   * @returns {number} The total length of results with great deal, if empty return 0.
   * @todo Move this function to utils.js.
   * @example
   * // 10
   * greatDealSize([{...}, {...}])
   */
  greatDealSize(results) {
    return results.length ? results.filter(r => r.greatDeal).length : 0;
  }

  /**
   * @function toggleFilter - Dispatch action to toggle open/close mobile filter.
   */
  toggleFilter() {
    const { dispatch } = this.props;
    dispatch(actions.toggleFilter());
  }

  render() {
    const {
      loading, notifier, results, map,
    } = this.props;
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
        {notifier && (
          <Notifier title="Congratulations!" message="Now this hotel is in your favorite list." />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
