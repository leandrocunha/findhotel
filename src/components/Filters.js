import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';
import {
  sortDistance as actionSortDistance,
  sortPrice as actionSortPrice,
  sortRate as actionSortRate,
} from '../actions/search';

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
    return (
      <div className="Filters">
        <div className="Filters__Wrapper">
          <div className="Filters__Wrapper__Filter">
            <p>Max Price</p>
            <SliderTooltip min={0} max={500} onAfterChange={value => this.sortPrice(value)} />
          </div>
          <div className="Filters__Wrapper__Filter">
            <p>Min Rating</p>
            <SliderTooltip min={1} max={5} onAfterChange={value => this.sortRate(value)} />
          </div>
          <div className="Filters__Wrapper__Filter">
            <p>Distance from city center</p>
            <SliderTooltip min={0} max={1000} onAfterChange={value => this.sortDistance(value)} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Filters);
