import React from 'react';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import Results from '../../src/components/Results';
import mock from '../../src/mock';
import * as actions from '../../src/actions/search';

const initialState = { loading: true, results: [] };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Results />', () => {
  it('should render Results component', () => {
    const wrapper = shallow(<Results {...initialState} store={store} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should list mock results', () => {
    const wrapper = mount(<Results store={store} results={mock} />);
    expect(wrapper.find('.Results__Result').length).toEqual(mock.length);
  });

  it('should show greatDeal', () => {
    const wrapper = mount(<Results store={store} results={mock} />);
    expect(
      wrapper
        .setProps({ greatDeal: true })
        .find('.Results__Result__Prices__FreeCancelation')
        .exists(),
    ).toEqual(true);
  });

  it('should show GMaps', () => {
    const wrapper = shallow(<Results store={store} results={[mock[0]]} />).dive();
    const showMap = jest.spyOn(wrapper.instance(), 'showMap');
    const expectedAction = { type: 'SEARCH/MAP/OPEN', data: mock[0].coordinates };

    wrapper.find('#btnShowMap').simulate('click');
    expect(showMap).toBeCalledWith(mock[0].coordinates);
    expect(actions.mapOpen(mock[0].coordinates)).toEqual(expectedAction);
  });
});
