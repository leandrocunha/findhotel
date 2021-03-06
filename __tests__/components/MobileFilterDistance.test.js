import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MobileFilterDistance from '../../src/components/MobileFilterDistance';

const initialState = {};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<MobileFilterDistance />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<MobileFilterDistance store={store} />).dive();
    expect(wrapper.exists()).toEqual(true);
  });

  it('should filter distance', () => {
    const wrapper = shallow(<MobileFilterDistance store={store} />).dive();
    const sortDistance = jest.spyOn(wrapper.instance(), 'sortDistance');

    wrapper.find('.Button').forEach((component) => {
      component.simulate('click');
      expect(sortDistance).toBeCalled();
    });
  });
});
