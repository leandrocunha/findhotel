import React from 'react';
import { shallow } from 'enzyme';
import Ribbon from '../../src/components/Ribbon';

describe('<Ribbon />', () => {
  it('should render Ribbon component', () => {
    const wrapper = shallow(<Ribbon />);
    expect(wrapper.exists()).toEqual(true);
  });
});
