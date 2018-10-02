import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../actions/search';
import Numeral from './Numeral';

class MobileMaxPrice extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {number} active
     * @example
     * { active: 1001 }
     */
    this.state = { active: 1001 };

    /** Bind sortPrice to filter results by price. */
    this.sortPrice = this.sortPrice.bind(this);
  }

  /**
   * @function sortPrice Filter results by price
   * @param {number} value Number to represent de value of price.
   * @returns Results will be returned with values lower than value passed in the paramenter
   * and dispatch action to close filter overlay.
   */
  sortPrice(value) {
    const { dispatch } = this.props;

    this.setState({ active: value });
    dispatch(actions.sortPrice(value));
    dispatch(actions.toggleFilter());
  }

  render() {
    const { active } = this.state;
    return (
      <div className="MobileFilter MobileFilter--price">
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--primary',
            active === 1001 && 'Button--mobilefilter--primary--active',
          )}
          data-value={1001}
          onClick={() => this.sortPrice(1001)}
          type="button"
        >
          Any
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--primary',
            active === 100 && 'Button--mobilefilter--primary--active',
          )}
          data-value={100}
          onClick={() => this.sortPrice(100)}
          type="button"
        >
          <Numeral value={100} />
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--primary',
            active === 200 && 'Button--mobilefilter--primary--active',
          )}
          data-value={200}
          onClick={() => this.sortPrice(200)}
          type="button"
        >
          <Numeral value={200} />
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--primary',
            active === 300 && 'Button--mobilefilter--primary--active',
          )}
          data-value={300}
          onClick={() => this.sortPrice(300)}
          type="button"
        >
          <Numeral value={300} />
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--primary',
            active === 400 && 'Button--mobilefilter--primary--active',
          )}
          data-value={400}
          onClick={() => this.sortPrice(400)}
          type="button"
        >
          <Numeral value={400} />
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--primary',
            active === 1000 && 'Button--mobilefilter--primary--active',
          )}
          data-value={1000}
          onClick={() => this.sortPrice(1000)}
          type="button"
        >
          <Numeral value={500} />
        </button>
      </div>
    );
  }
}

export default connect()(MobileMaxPrice);
