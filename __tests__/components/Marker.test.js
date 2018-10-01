import React from 'react';
import { shallow } from 'enzyme';
import Marker from '../../src/components/Marker';
import mock from '../../src/mock';

describe('<Marker />', () => {
  it('should render Marker component', () => {
    const wrapper = shallow(<Marker results={mock} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
