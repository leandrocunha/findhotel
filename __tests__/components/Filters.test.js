import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Filters from '../../src/components/Filters';

const initialState = { loading: true, results: [] };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Filters />', () => {
  it('should be exists', () => {
    const wrapper = shallow(<Filters store={store} />).dive();
    expect(wrapper.exists()).toEqual(true);
  });

  it('should setState when call sortPrice', () => {
    const wrapper = shallow(<Filters store={store} />).dive();
    const sortPrice = jest.spyOn(wrapper.instance(), 'sortPrice');

    sortPrice(10);
    wrapper.setState({ price: 10 });
    expect(wrapper.state()).toEqual({ ...wrapper.state(), price: 10 });
  });

  it('should setState when call sortRate', () => {
    const wrapper = shallow(<Filters store={store} />).dive();
    const sortRate = jest.spyOn(wrapper.instance(), 'sortRate');

    sortRate(10);
    wrapper.setState({ rate: 3 });
    expect(wrapper.state()).toEqual({ ...wrapper.state(), rate: 3 });
  });

  it('should setState when call sortDistance', () => {
    const wrapper = shallow(<Filters store={store} />).dive();
    const sortDistance = jest.spyOn(wrapper.instance(), 'sortDistance');

    sortDistance(10);
    wrapper.setState({ distance: 150 });
    expect(wrapper.state()).toEqual({ ...wrapper.state(), distance: 150 });
  });
});
