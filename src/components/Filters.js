import React, { Component } from 'react';
import classnames from 'classnames';
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

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderTooltip = createSliderWithTooltip(Slider);

class Filters extends Component {
  constructor(props) {
    super(props);
    this.sortDistance = this.sortDistance.bind(this);
    this.sortPrice = this.sortPrice.bind(this);
    this.sortRate = this.sortRate.bind(this);
  }

  sortDistance(value) {
    const { dispatch } = this.props;
    dispatch(actionSortDistance(value));
  }

  sortPrice(value) {
    const { dispatch } = this.props;
    dispatch(actionSortPrice(value));
  }

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

export default connect(mapStateToProps)(Filters);
