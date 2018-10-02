import React from 'react';
import { shallow } from 'enzyme';
import Grade from '../../src/components/Grade';

describe('<Grade />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<Grade grade={8} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
