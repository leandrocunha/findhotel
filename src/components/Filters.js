import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';
import { sortPrice, sortRate as actionSortRate } from '../actions/search';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderTooltip = createSliderWithTooltip(Slider);

class Filters extends Component {
  constructor(props) {
    super(props);
    this.sortPrice = this.sortPrice.bind(this);
    this.sortRate = this.sortRate.bind(this);
  }

  sortPrice(value) {
    const { dispatch } = this.props;
    dispatch(sortPrice(value));
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
            <SliderTooltip min={0} max={500} onChange={value => this.sortPrice(value)} step={50} />
          </div>
          <div className="Filters__Wrapper__Filter">
            <p>Min Rating</p>
            <SliderTooltip min={1} max={5} onChange={value => this.sortRate(value)} step={1} />
          </div>
          <div className="Filters__Wrapper__Filter">
            <p>Distance from city center</p>
            <SliderTooltip />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Filters);
