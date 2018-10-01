import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../src/components/Loading';
import mock from '../../src/mock';

describe('<Loading />', () => {
  it('should render Loading component', () => {
    const wrapper = shallow(<Loading results={mock} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
