const sort = (direction, arr) => {
  switch (direction) {
    case 'best_rating':
      arr.sort((a, b) => b.rating - a.rating);
      break;

    case 'lowest_prices':
      arr.sort((a, b) => a.price - b.price);
      break;

    case 'highest_prices':
      arr.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }

  return arr;
};

export { sort };
