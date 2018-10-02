import React from 'react';
import configureStore from 'redux-mock-store';
import Slider from 'rc-slider';
import { shallow } from 'enzyme';
import Filters from '../../src/components/Filters';

const initialState = { loading: true, results: [] };

const mockStore = configureStore();
const store = mockStore(initialState);

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderTooltip = createSliderWithTooltip(Slider);

describe('<Filters />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<Filters store={store} />).dive();
    expect(wrapper.exists()).toEqual(true);
  });
});
