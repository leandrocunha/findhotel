import React from 'react';

const Sort = () => (
  <div className="Sort">
    <div className="Sort__Wrapper">
      <form>
        <label htmlFor="sortOpts">Sort by:</label>
        <select id="sortOpts">
          <option>Best rating</option>
          <option>Lowest prices</option>
          <option>Highest prices</option>
        </select>
      </form>
    </div>
  </div>
);

export default Sort;
