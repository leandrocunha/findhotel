import React from 'react';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../../src/components/App';
import Loading from '../../src/components/Loading';
import Results from '../../src/components/Results';
import Filters from '../../src/components/Filters';
import Sort from '../../src/components/Sort';
import Modal from '../../src/components/Modal';
import mock from '../../src/mock';

const initialState = { loading: true, results: [] };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<App />', () => {
  it('should mount the smart component App', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App {...initialState} />
      </Provider>,
    );

    expect(wrapper.find('.Header').length).toEqual(1);
    expect(wrapper.find(Filters).length).toEqual(1);
    expect(wrapper.find(Sort).length).toEqual(1);
    expect(wrapper.find(App).props().loading).toEqual(true);
    expect(wrapper.find(Loading).length).toEqual(1);
    expect(wrapper.find(Results).length).toEqual(0);
    expect(wrapper.find(App).props().map).toEqual(undefined);
    expect(wrapper.find(Modal).length).toEqual(0);
  });

  it('should return greatDeal size', () => {
    const wrapper = shallow(<App store={store} {...initialState} />).dive();
    const greatDealSize = jest.spyOn(wrapper.instance(), 'greatDealSize');

    wrapper.instance().forceUpdate();

    expect(greatDealSize).toBeCalledWith(initialState.results);
  });

  it('should render component after fetch mock and list results', () => {
    const wrapper = shallow(<App store={store} {...initialState} />).dive();

    wrapper.setProps({ loading: false });
    expect(wrapper.find(Loading).length).toEqual(0);
    expect(wrapper.find(Results).length).toEqual(1);
  });

  it('should render Modal', () => {
    const wrapper = shallow(<App store={store} {...initialState} />).dive();

    wrapper.setProps({ map: { show: true, coordinates: { ...mock[0].coordinates } } });
    expect(wrapper.find(Modal).length).toEqual(1);
  });
});
