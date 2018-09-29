import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { greatDeal, total } = this.props;

    return (
      <div className="Sort">
        <div className="Sort__Wrapper">
          <form className="Sort__Wrapper__Form">
            <label htmlFor="sortOpts">Sort by:</label>
            <select id="sortOpts" onChange={e => this.sort(e.target.value)}>
              <option>Select a option</option>
              <option value="best_rating">Best rating (stars)</option>
              <option value="lowest_prices">Lowest prices</option>
              <option value="highest_prices">Highest prices</option>
            </select>
          </form>
          <p className="Sort__Wrapper__Overview">
            {`${total} hotels,`}
            {' '}
            <button
              className="Button Button--link"
              onClick={() => this.sort('great_deal')}
              type="button"
            >
              {`${greatDeal} with great deals`}
            </button>
          </p>
        </div>
      </div>
    );
  }
}

Sort.defaultProps = {
  greatDeal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect()(Sort);
