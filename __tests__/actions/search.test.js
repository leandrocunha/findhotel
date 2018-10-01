import * as actions from '../../src/actions/search';

describe('actions', () => {
  it('should close map', () => {
    const expectedAction = { type: 'SEARCH/MAP/CLOSE' };
    expect(actions.mapClose()).toEqual(expectedAction);
  });

  it('should open map', () => {
    const coordinates = [10, 20];
    const expectedAction = { type: 'SEARCH/MAP/OPEN', data: coordinates };
    expect(actions.mapOpen(coordinates)).toEqual(expectedAction);
  });

  it('should dispatch results', () => {
    const expectedAction = { type: 'SEARCH/RESULTS' };
    expect(actions.results()).toEqual(expectedAction);
  });

  it('should start search mock', () => {
    const expectedAction = { type: 'SEARCH' };
    expect(actions.search()).toEqual(expectedAction);
  });

  it('should sort results', () => {
    const direction = 'best_rating';
    const expectedAction = { type: 'SEARCH/SORT', data: direction };
    expect(actions.sort(direction)).toEqual(expectedAction);
  });

  it('should filter distance', () => {
    const distance = 100;
    const expectedAction = { type: 'SEARCH/DISTANCE', data: distance };
    expect(actions.sortDistance(distance)).toEqual(expectedAction);
  });

  it('should filter price', () => {
    const price = 75;
    const expectedAction = { type: 'SEARCH/PRICE', data: price };
    expect(actions.sortPrice(price)).toEqual(expectedAction);
  });

  it('should filter rate', () => {
    const rate = 3;
    const expectedAction = { type: 'SEARCH/RATE', data: rate };
    expect(actions.sortRate(rate)).toEqual(expectedAction);
  });
});
