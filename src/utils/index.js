const sort = (direction, arr) => {
  switch (direction) {
    case 'best_rating':
      arr.sort((a, b) => b.rating - a.rating);
      return arr;

    case 'lowest_prices':
      arr.sort((a, b) => a.price - b.price);
      return arr;

    case 'highest_prices':
      arr.sort((a, b) => b.price - a.price);
      return arr;

    case 'great_deal':
      return arr.filter(r => r.greatDeal);

    default:
      return arr;
  }
};

const gradeAsText = (grade) => {
  switch (true) {
    case grade > 8:
      return 'Fabulous';

    case grade > 6:
      return 'Very good';

    default:
      return 'Good';
  }
};

const slug = str => str.replace(' ', '-').toLowerCase();

export { gradeAsText, slug, sort };
