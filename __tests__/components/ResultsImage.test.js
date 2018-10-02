import React from 'react';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import ResultsImage from '../../src/components/ResultsImage';
import Ribbon from '../../src/components/Ribbon';

const initialState = {};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<ResultsImage />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<ResultsImage image="urlOfImage" name="brand" />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('show ribbon', () => {
    const wrapper = shallow(<ResultsImage image="urlOfImage" name="brand" />);
    wrapper.setProps({ greatDeal: true });
    expect(wrapper.find(Ribbon).length).toEqual(1);
  });
});
