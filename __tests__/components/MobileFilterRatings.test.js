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

  it('should filter rating', () => {
    const wrapper = shallow(<MobileFilterRating store={store} />).dive();
    const sortRate = jest.spyOn(wrapper.instance(), 'sortRate');

    wrapper.find('.Button').forEach((component) => {
      component.simulate('click');
      expect(sortRate).toBeCalled();
    });
  });
});
