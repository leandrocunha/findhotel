import React from 'react';
import { shallow } from 'enzyme';
import Tags from '../../src/components/Tags';
import mock from '../../src/mock';

describe('<Tags />', () => {
  it('should render Tags component', () => {
    const wrapper = shallow(<Tags tags={mock[0].compliments} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
