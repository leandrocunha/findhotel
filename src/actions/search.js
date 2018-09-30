const search = () => ({ type: 'SEARCH' });

const results = () => ({ type: 'SEARCH/RESULTS' });

const sort = direction => ({ type: 'SEARCH/SORT', data: direction });

const sortDistance = value => ({ type: 'SEARCH/DISTANCE', data: value });

const sortPrice = value => ({ type: 'SEARCH/PRICE', data: value });

const sortRate = value => ({ type: 'SEARCH/RATE', data: value });

export {
  results, search, sort, sortDistance, sortPrice, sortRate,
};
