import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../../src/components/Rating';

describe('<Rating />', () => {
  it('should render Rating component', () => {
    const wrapper = shallow(<Rating rate={3} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
