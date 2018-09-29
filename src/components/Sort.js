import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, sort } from '../actions/search';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
  }

  sort(opt) {
    const { dispatch } = this.props;

    dispatch(search());
    setTimeout(() => dispatch(sort(opt)), 1000);
  }

  render() {
    return (
      <div className="Sort">
        <div className="Sort__Wrapper">
          <form>
            <label htmlFor="sortOpts">Sort by:</label>
            <select id="sortOpts" onChange={e => this.sort(e.target.value)}>
              <option>Select a option</option>
              <option value="best_rating">Best rating (stars)</option>
              <option value="lowest_prices">Lowest prices</option>
              <option value="highest_prices">Highest prices</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Sort);
