import results from '../mock';
import { sort } from '../utils';

const initialState = { loading: true, results: [] };

const search = (state = initialState, { type, data }) => {
  switch (type) {
    case 'SEARCH':
      return { ...initialState };

    case 'SEARCH/RESULTS':
      return { loading: false, results };

    case 'SEARCH/SORT':
      return { loading: false, results: [...sort(data, state.results)] };

    case 'SEARCH/DISTANCE':
      return { ...state, loading: false, results: results.filter(r => r.distance <= data) };

    case 'SEARCH/PRICE':
      return { ...state, loading: false, results: results.filter(r => r.price <= data) };

    case 'SEARCH/RATE':
      return { ...state, loading: false, results: results.filter(r => r.rating <= data) };

    case 'SEARCH/MAP/OPEN':
      return { ...state, map: { show: true, coordinates: data } };

    case 'SEARCH/MAP/CLOSE':
      return { ...state, map: undefined };

    case 'SEARCH/FILTER':
      return { ...state, filter: !state.filter };

    case 'SEARCH/NOTIFIER':
      return { ...state, notifier: data === 'open' };

    default:
      return state;
  }
};

export default search;
