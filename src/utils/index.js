/**
 * @function sort - Sort results direction passed in parameter.
 * @param {string} direction - String to repesent the kind of sort.
 * @param {Array} arr - Array with results to be sorted.
 * @returns {Array} Sorted array.
 * @example sort('best_rating, [{...}, {...}])
 */
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

/**
 * @function gradeAsText - Translate grade to a string representation.
 * @param {number} grade - The grade value.
 * @returns {string} A string representation of grade.
 * @example
 * //returns Fabulous
 * gradeAsText(8)
 */
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

/**
 * @function slug - Simple function to convert white spaces and hyphen.
 * @param {string} str - A string with white spaces.
 * @returns {string} New hyphenized string and in lowercase.
 * @example
 * //returns find-hotel
 * slug('Find Hotel')
 */
const slug = str => str.replace(' ', '-').toLowerCase();

export { gradeAsText, slug, sort };
