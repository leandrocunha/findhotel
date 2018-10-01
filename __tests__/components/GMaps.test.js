import React from 'react';
import { shallow } from 'enzyme';
import GMaps from '../../src/components/GMaps';
import mock from '../../src/mock';

describe('<GMaps />', () => {
  it('should render GMaps component', () => {
    const wrapper = shallow(<GMaps {...mock[0].coordinates} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
