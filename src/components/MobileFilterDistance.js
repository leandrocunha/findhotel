import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../actions/search';

class MobileFilterDistance extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {number} active
     * @example
     * { active: 1001 }
     */
    this.state = { active: 1001 };

    /** Bind sortDistance to filter results by distance. */
    this.sortDistance = this.sortDistance.bind(this);
  }

  /**
   * @function sortDistance Filter results by distance from city center.
   * @param {number} value Number to represent de value of distance from city center in meters.
   * @returns Results will be returned with values lower than value passed in the paramenter
   * and dispatch action to close filter overlay.
   */
  sortDistance(value) {
    const { dispatch } = this.props;

    this.setState({ active: value });
    dispatch(actions.sortDistance(value));
    dispatch(actions.toggleFilter());
  }

  render() {
    const { active } = this.state;
    return (
      <div className="MobileFilter MobileFilter--distance">
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--orange',
            active === 1001 && 'Button--mobilefilter--orange--active',
          )}
          data-value={1001}
          onClick={() => this.sortDistance(1001)}
          type="button"
        >
          Any
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--orange',
            active === 100 && 'Button--mobilefilter--orange--active',
          )}
          data-value={100}
          onClick={() => this.sortDistance(100)}
          type="button"
        >
          100m
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--orange',
            active === 200 && 'Button--mobilefilter--orange--active',
          )}
          data-value={200}
          onClick={() => this.sortDistance(200)}
          type="button"
        >
          200m
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--orange',
            active === 300 && 'Button--mobilefilter--orange--active',
          )}
          data-value={300}
          onClick={() => this.sortDistance(300)}
          type="button"
        >
          300m
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--orange',
            active === 400 && 'Button--mobilefilter--orange--active',
          )}
          data-value={400}
          onClick={() => this.sortDistance(400)}
          type="button"
        >
          400m
        </button>
        <button
          className={classnames(
            'Button',
            'Button--mobilefilter',
            'Button--mobilefilter--orange',
            active === 1000 && 'Button--mobilefilter--orange--active',
          )}
          data-value={1000}
          onClick={() => this.sortDistance(1000)}
          type="button"
        >
          +500m
        </button>
      </div>
    );
  }
}

export default connect()(MobileFilterDistance);
