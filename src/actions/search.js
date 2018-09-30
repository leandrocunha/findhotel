const mapClose = () => ({ type: 'SEARCH/MAP/CLOSE' });

const mapOpen = coordinates => ({ type: 'SEARCH/MAP/OPEN', data: coordinates });

const results = () => ({ type: 'SEARCH/RESULTS' });

const search = () => ({ type: 'SEARCH' });

const sort = direction => ({ type: 'SEARCH/SORT', data: direction });

const sortDistance = value => ({ type: 'SEARCH/DISTANCE', data: value });

const sortPrice = value => ({ type: 'SEARCH/PRICE', data: value });

const sortRate = value => ({ type: 'SEARCH/RATE', data: value });

export {
  mapClose, mapOpen, results, search, sort, sortDistance, sortPrice, sortRate,
};
