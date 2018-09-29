import results from '../mock';

const initialState = { loading: true, results: [] };

const search = (state = initialState, { type, data }) => {
  switch (type) {
    case 'SEARCH':
      return { ...initialState };

    case 'SEARCH/RESULTS':
      return { loading: false, results };

    default:
      return state;
  }
};

export default search;
