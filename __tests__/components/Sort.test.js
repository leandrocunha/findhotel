import React from 'react';
import configureStore from 'redux-mock-store';
import Select from 'react-select';
import { mount, shallow } from 'enzyme';
import Sort from '../../src/components/Sort';
import * as actions from '../../src/actions/search';

const initialState = { loading: true, results: [] };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Sort />', () => {
  it('should render Sort component', () => {
    const wrapper = mount(<Sort store={store} />);
    expect(wrapper.find(Sort).length).toEqual(1);
  });

  it('should render Select component', () => {
    const wrapper = mount(<Sort store={store} />);
    expect(wrapper.find(Select).exists()).toEqual(true);
  });

  it('should change option and dispatch action', () => {
    const wrapper = shallow(<Sort store={store} />).dive();
    const sort = jest.spyOn(wrapper.instance(), 'sort');

    wrapper.find(Select).simulate('change', wrapper.find(Select).props().options[0]);
    expect(sort).toBeCalledWith(wrapper.find(Select).props().options[0].value);
  });

  it('should sort results with greatDeal', () => {
    const wrapper = shallow(<Sort store={store} />).dive();
    const sort = jest.spyOn(wrapper.instance(), 'sort');
    const direction = 'great_deal';
    const expectedAction = { type: 'SEARCH/SORT', data: direction };

    wrapper.find('#btnSortGreatDeal').simulate('click');
    expect(sort).toBeCalledWith(direction);
    expect(actions.sort(direction)).toEqual(expectedAction);
  });
});
