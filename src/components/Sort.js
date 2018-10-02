import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search, sort } from '../actions/search';

/** Object to customize the Select component */
const customStyles = {
  option: base => ({
    ...base,
    cursor: 'pointer',
    borderBottom: '1px solid rgba(0,0,0,.1)',
    padding: '10px',
    transition: 'all .3s ease',
  }),
  control: () => ({
    backgroundColor: '#4f94dc',
    borderRadius: '20px',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    margin: '0 10px',
    padding: '0 10px',
    width: 180,
  }),
  placeholder: () => ({
    color: '#fff',
    fontSize: '14px',
  }),
  singleValue: () => ({
    color: '#fff',
    cursor: 'pointer',
  }),
  dropdownIndicator: base => ({
    ...base,
    color: '#fff',
  }),
};
class Sort extends Component {
  constructor(props) {
    super(props);

    /** Bind function to sort results */
    this.sort = this.sort.bind(this);
  }

  /**
   * @function sort Sort result passing a direction of sort.
   * @param {string} opt A string to represent the sort direction.
   * @returns first dispatch an action to show loader and simulate the fetch to API
   * and after 1seg dispatch actio to sort.
   * @example
   * const opt = 'best_rating';
   * sort(opt)
   */
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
            <Select
              isSearchable={false}
              onChange={({ value }) => this.sort(value)}
              options={[
                { label: 'Best rating (stars)', value: 'best_rating' },
                { label: 'Lowest prices', value: 'lowest_prices' },
                { label: 'Highest prices', value: 'highest_prices' },
              ]}
              placeholder="Select a option"
              styles={customStyles}
            />
          </form>
          <p className="Sort__Wrapper__Overview">
            {`${total} hotels,`}
            {' '}
            <button
              className="Button Button--link"
              id="btnSortGreatDeal"
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
