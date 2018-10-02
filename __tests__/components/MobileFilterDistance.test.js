import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MobileFilterDistance from '../../src/components/MobileFilterDistance';

const initialState = {};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<MobileFilterDistace />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<MobileFilterDistance store={store} />).dive();
    expect(wrapper.exists()).toEqual(true);
  });

  it('should filter distance', () => {
    const wrapper = shallow(<MobileFilterDistance store={store} />).dive();
    const anonymousFn = jest.fn();

    wrapper.find('.Button').forEach((component) => {
      component.simulate('click');
      expect(anonymousFn).toBeCalled();
    });
  });
});
