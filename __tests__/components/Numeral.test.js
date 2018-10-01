import React from 'react';
import { shallow } from 'enzyme';
import Numeral from '../../src/components/Numeral';

describe('<Numeral />', () => {
  it('should render Numeral component', () => {
    const wrapper = shallow(<Numeral value={10} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
