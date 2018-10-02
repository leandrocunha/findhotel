import { gradeAsText, sort } from '../../src/utils';

describe('Utils', () => {
  it('sort rating', () => {
    const direction = 'best_rating';
    const arr = [
      { name: 'Hotel 1', rating: 1 },
      { name: 'Hotel 3', rating: 3 },
      { name: 'Hotel 2', rating: 2 },
    ];
    const expectArr = [
      { name: 'Hotel 3', rating: 3 },
      { name: 'Hotel 2', rating: 2 },
      { name: 'Hotel 1', rating: 1 },
    ];

    expect(sort(direction, arr)).toEqual(expectArr);
  });

  it('sort lowest price', () => {
    const direction = 'lowest_prices';
    const arr = [
      { name: 'Hotel 1', price: 10 },
      { name: 'Hotel 3', price: 100 },
      { name: 'Hotel 2', price: 30 },
    ];
    const expectArr = [
      { name: 'Hotel 1', price: 10 },
      { name: 'Hotel 2', price: 30 },
      { name: 'Hotel 3', price: 100 },
    ];

    expect(sort(direction, arr)).toEqual(expectArr);
  });

  it('sort highest prices', () => {
    const direction = 'highest_prices';
    const arr = [
      { name: 'Hotel 1', price: 10 },
      { name: 'Hotel 3', price: 100 },
      { name: 'Hotel 2', price: 30 },
    ];
    const expectArr = [
      { name: 'Hotel 3', price: 100 },
      { name: 'Hotel 2', price: 30 },
      { name: 'Hotel 1', price: 10 },
    ];

    expect(sort(direction, arr)).toEqual(expectArr);
  });

  it('sort great deal', () => {
    const direction = 'great_deal';
    const arr = [
      { name: 'Hotel 1', greatDeal: true },
      { name: 'Hotel 2', greatDeal: true },
      { name: 'Hotel 3', greatDeal: false },
    ];
    const expectArr = [{ name: 'Hotel 1', greatDeal: true }, { name: 'Hotel 2', greatDeal: true }];

    expect(sort(direction, arr)).toEqual(expectArr);
  });

  it('sort default', () => {
    const direction = null;
    const arr = [
      { name: 'Hotel 1', greatDeal: true },
      { name: 'Hotel 2', greatDeal: true },
      { name: 'Hotel 3', greatDeal: false },
    ];

    expect(sort(direction, arr)).toEqual(arr);
  });

  it('grade to Fabulous', () => {
    expect(gradeAsText(9)).toEqual('Fabulous');
  });

  it('grade to Very good', () => {
    expect(gradeAsText(7)).toEqual('Very good');
  });

  it('grade to Good', () => {
    expect(gradeAsText(5)).toEqual('Good');
  });
});
