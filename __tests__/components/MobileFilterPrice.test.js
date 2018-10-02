import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MobileFilterPrice from '../../src/components/MobileFilterPrice';

const initialState = {};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<MobileFilterPrice />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<MobileFilterPrice store={store} />).dive();
    expect(wrapper.exists()).toEqual(true);
  });

  it('should filter distance', () => {
    const wrapper = shallow(<MobileFilterPrice store={store} />).dive();
    const sortPrice = jest.spyOn(wrapper.instance(), 'sortPrice');

    wrapper.instance().forceUpdate();
    wrapper.find('.Button').forEach((component) => {
      component.simulate('click');
      expect(sortPrice).toBeCalled();
    });
  });
});
