import React from 'react';

const FilterDropdown = ({ filter, setFilter }) => (
  <div>
    <label htmlFor="filter">Filter by Difficulty:</label>
    <select
      id="filter"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">All</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
);

export default FilterDropdown;