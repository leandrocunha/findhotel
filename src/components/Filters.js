import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { connect } from 'react-redux';
import * as actions from '../actions/search';
import MobileFilterPrice from './MobileFilterPrice';
import MobileFilterRating from './MobileFilterRating';
import MobileFilterDistance from './MobileFilterDistance';

/** Set Slider to works with tooltip
 * @external Class
 * @see {@link https://github.com/react-component/slider#createsliderwithtooltipslider--range--reactcomponent}
 */
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderTooltip = createSliderWithTooltip(Slider);

class Filters extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {number} distance
     * @param {number} price
     * @param {number} rate
     * @example
     * { distance: 0, price: 0, rate: 0 }
     */
    this.state = { distance: 0, price: 0, rate: 0 };

    /** Bind sortDistance to filter results by distance. */
    this.sortDistance = this.sortDistance.bind(this);

    /** Bind sortPrice to filter results by price. */
    this.sortPrice = this.sortPrice.bind(this);

    /** Bind sortRate to filter results by users rate. */
    this.sortRate = this.sortRate.bind(this);
  }

  /**
   * @function sortDistance Filter results by distance from city center.
   * @param {number} value Number to represent de value of distance from city center in meters.
   * @returns Results will be returned with values lower than value passed in the paramenter.
   */
  sortDistance(value) {
    const { dispatch } = this.props;
    const { distance } = this.state;
    this.setState({ distance: value });

    if (value !== distance) {
      dispatch(actions.search());
      setTimeout(() => dispatch(actions.sortDistance(value)), 1000);
    }
  }

  /**
   * @function sortPrice Filter results by price
   * @param {number} value Number to represent de value of price.
   * @returns Results will be returned with values lower than value passed in the paramenter.
   */
  sortPrice(value) {
    const { dispatch } = this.props;
    const { price } = this.state;

    this.setState({ price: value });

    if (value !== price) {
      dispatch(actions.search());
      setTimeout(() => dispatch(actions.sortPrice(value)), 1000);
    }
  }

  /**
   * @function sortRate Filter results by rate
   * @param {number} value Number to represent de value of rate.
   * @returns Results will be returned with values lower than value passed in the paramenter.
   */
  sortRate(value) {
    const { dispatch } = this.props;
    const { rate } = this.state;

    this.setState({ rate: value });

    if (value !== rate) {
      dispatch(actions.search());
      setTimeout(() => dispatch(actions.sortRate(value)), 1000);
    }
  }

  render() {
    const { filter } = this.props;

    return (
      <div className={classnames('Filters', filter && 'Filters--mobile')}>
        <div className="Filters__Wrapper">
          <div className="Filters__Wrapper__Filter">
            <p>Max Price</p>
            <SliderTooltip min={0} max={500} onAfterChange={value => this.sortPrice(value)} />
            <MobileFilterPrice />
          </div>
          <div className="Filters__Wrapper__Filter">
            <p>Min Rating</p>
            <SliderTooltip min={1} max={5} onAfterChange={value => this.sortRate(value)} />
            <MobileFilterRating />
          </div>
          <div className="Filters__Wrapper__Filter">
            <p>Distance from city center</p>
            <SliderTooltip min={0} max={1000} onAfterChange={value => this.sortDistance(value)} />
            <MobileFilterDistance />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

Filters.defaultProps = {
  filter: false,
};

Filters.propTypes = {
  filter: PropTypes.bool,
};

export default connect(mapStateToProps)(Filters);
