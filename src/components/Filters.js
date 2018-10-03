import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { connect } from 'react-redux';
import {
  sortDistance as actionSortDistance,
  sortPrice as actionSortPrice,
  sortRate as actionSortRate,
} from '../actions/search';
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
    dispatch(actionSortDistance(value));
  }

  /**
   * @function sortPrice Filter results by price
   * @param {number} value Number to represent de value of price.
   * @returns Results will be returned with values lower than value passed in the paramenter.
   */
  sortPrice(value) {
    const { dispatch } = this.props;
    dispatch(actionSortPrice(value));
  }

  /**
   * @function sortRate Filter results by rate
   * @param {number} value Number to represent de value of rate.
   * @returns Results will be returned with values lower than value passed in the paramenter.
   */
  sortRate(value) {
    const { dispatch } = this.props;
    dispatch(actionSortRate(value));
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
