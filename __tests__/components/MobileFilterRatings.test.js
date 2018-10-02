import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MobileFilterRating from '../../src/components/MobileFilterRating';
import * as actions from '../../src/actions/search';

const initialState = {};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<MobileFilterRatings />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<MobileFilterRating store={store} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should rate 5', () => {
    const wrapper = shallow(<MobileFilterRating store={store} />).dive();
    const anonymousFn = jest.fn();
    const value = 6;

    wrapper.find('.Button').forEach((item) => {
      item.simulate('click');
      expect(anonymousFn).toBeCalled();
      expect(actions.sortRate(value)).toEqual({ type: 'SEARCH/RATE', data: value });
    });
  });
});
