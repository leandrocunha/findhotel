import React from 'react';
import configureStore from 'redux-mock-store';
import Slider from 'rc-slider';
import { mount, shallow } from 'enzyme';
import Filters from '../../src/components/Filters';
import * as actions from '../../src/actions/search';

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

  it('should sort price', () => {
    const wrapper = shallow(<Filters store={store} />).dive();
    const anonymous = jest.fn();
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const SliderTooltip = createSliderWithTooltip(Slider);
    const range = [10, 20];

    wrapper.instance().forceUpdate();

    wrapper
      .find('Filters')
      .find('Filters__Wrapper')
      .find('Filters__Wrapper__Filter')
      .find(SliderTooltip)
      .simulate('afterChange', range);
    // expect(anonymous).toBeCalled();

    // wrapper
    //   .find(Slider)
    //   .first()
    //   .simulate('change', range);

    // expect(wrapper.find(Filters).length).toEqual(1);

    // wrapper.instance().forceUpdate();
    // const sortPrice = jest.spyOn(wrapper.instance(), 'sortPrice');
    // const range = [10, 20];
    // const expectedAction = { type: 'SEARCH/PRICE', data: range };

    // const createSliderWithTooltip = Slider.createSliderWithTooltip;
    // const SliderTooltip = createSliderWithTooltip(Slider);

    // wrapper.instance().forceUpdate();
    // console.log(wrapper.find(Slider).length);
    // wrapper.find(SliderTooltip).simulate('change', range);
    // expect(sortPrice).toBeCalledWith(range);
    // expect(actions.sortPrice(range)).toEqual(expectedAction);
  });
});
