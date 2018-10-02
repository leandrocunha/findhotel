import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../actions/search';

class MobileFilterRating extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {number} active
     * @example
     * { active: 6 }
     */
    this.state = { active: 6 };

    /** Bind sortRate to filter results by users rate. */
    this.sortRate = this.sortRate.bind(this);
  }

  /**
   * @function sortRate Filter results by rate
   * @param {number} value Number to represent de value of rate.
   * @returns Results will be returned with values lower than value passed in the paramenter
   * and dispatch action to close filter overlay.
   */
  sortRate(value) {
    const { dispatch } = this.props;

    this.setState({ active: value });
    dispatch(actions.sortRate(value));
    dispatch(actions.toggleFilter());
  }

  render() {
    const { active } = this.state;
    return (
      <div className="MobileFilter MobileFilter--rating">
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--yellow',
            active === 6 && 'Button--mobilefilter--yellow--active',
          )}
          data-value={6}
          onClick={() => this.sortRate(6)}
          type="button"
        >
          Any
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--yellow',
            active === 1 && 'Button--mobilefilter--yellow--active',
          )}
          data-value={1}
          onClick={() => this.sortRate(1)}
          type="button"
        >
          1
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--yellow',
            active === 2 && 'Button--mobilefilter--yellow--active',
          )}
          data-value={2}
          onClick={() => this.sortRate(2)}
          type="button"
        >
          2
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--yellow',
            active === 3 && 'Button--mobilefilter--yellow--active',
          )}
          data-value={3}
          onClick={() => this.sortRate(3)}
          type="button"
        >
          3
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--yellow',
            active === 4 && 'Button--mobilefilter--yellow--active',
          )}
          data-value={4}
          onClick={() => this.sortRate(4)}
          type="button"
        >
          4
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--yellow',
            active === 5 && 'Button--mobilefilter--yellow--active',
          )}
          data-value={5}
          onClick={() => this.sortRate(5)}
          type="button"
        >
          5
        </button>
      </div>
    );
  }
}

export default connect()(MobileFilterRating);
