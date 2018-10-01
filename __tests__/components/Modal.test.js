import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Modal from '../../src/components/Modal';

const initialState = { loading: true, results: [] };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Modal />', () => {
  it('should render Modal component', () => {
    const wrapper = shallow(<Modal store={store} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should close map', () => {
    const wrapper = shallow(<Modal store={store} />).dive();
    const close = jest.spyOn(wrapper.instance(), 'close');

    wrapper.instance().forceUpdate();
    wrapper
      .find('.Modal')
      .first()
      .simulate('click');
    expect(close).toBeCalled();
  });

  it('should avoid close map on click inside map', () => {
    const wrapper = shallow(<Modal store={store} />).dive();

    wrapper
      .find('.Modal__Body')
      .first()
      .simulate('click', { stopPropagation: () => {} });
  });
});
