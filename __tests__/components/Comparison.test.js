import React from 'react';
import { shallow } from 'enzyme';
import Comparison from '../../src/components/Comparison';
import mock from '../../src/mock';

describe('<Comparison />', () => {
  it('should render Comparison component', () => {
    const wrapper = shallow(<Comparison results={mock[0].comparison} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
