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
      return { loading: false, results: sort(data, results) };

    case 'SEARCH/PRICE':
      return { ...state, results: results.filter(r => r.price <= data) };

    case 'SEARCH/RATE':
      return { ...state, results: results.filter(r => r.rating <= data) };

    default:
      return state;
  }
};

export default search;
