import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Notifier from '../../src/components/Notifier';
import * as actions from '../../src/actions/search';

const initialState = { notifier: true };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Notifier />', () => {
  it('render component', () => {
    const wrapper = shallow(<Notifier store={store} title="Foo" message="Bar" />).dive();
    expect(wrapper.exists()).toEqual(true);
  });

  it('show notifier', () => {
    const wrapper = shallow(<Notifier store={store} title="Foo" message="Bar" />).dive();
    const show = jest.spyOn(wrapper.instance(), 'show');

    wrapper.instance().forceUpdate();
    expect(wrapper.find('.Notifier').length).toEqual(1);
  });

  it('close notifier', () => {
    const wrapper = shallow(<Notifier store={store} title="Foo" message="Bar" />).dive();
    const close = jest.spyOn(wrapper.instance(), 'close');
    const expectedAction = { type: 'SEARCH/NOTIFIER', data: 'close' };

    wrapper.instance().forceUpdate();
    wrapper.find('.Notifier__Close').simulate('click');
    expect(close).toBeCalled();
    expect(wrapper.find('.Notifier--show').length).toEqual(0);
    expect(actions.notifier('close')).toEqual(expectedAction);
  });
});
