const search = () => ({ type: 'SEARCH' });

const results = () => ({ type: 'SEARCH/RESULTS' });

const sort = direction => ({ type: 'SEARCH/SORT', data: direction });

export { results, search, sort };
