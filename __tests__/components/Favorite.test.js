import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Favorite from '../../src/components/Favorite';

const initialState = {};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Favorite />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<Favorite store={store} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should toogle favorite', () => {
    const wrapper = shallow(<Favorite store={store} />).dive();
    const toggle = jest.spyOn(wrapper.instance(), 'toggle');

    wrapper.instance().forceUpdate();
    wrapper.find('.Favorite__Button').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should show empty favorite icon', () => {
    const wrapper = shallow(<Favorite store={store} />).dive();
    expect(wrapper.find('img').prop('src')).toEqual('images/favorite.svg');
  });

  it('should show favorite icon', () => {
    const wrapper = shallow(<Favorite store={store} />).dive();
    wrapper.setState({ favorite: true });
    expect(wrapper.find('img').prop('src')).toEqual('images/favorite-fill.svg');
  });
});
