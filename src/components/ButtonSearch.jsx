import React from 'react';
import SearchIcon from '../images/searchIcon.svg';

function ButtonSearch() {
  return (
    <button
      type="button"
      data-testid="search-top-btn"
      src={ SearchIcon }
    >
      <img src={ SearchIcon } alt="search" />
    </button>
  );
}

export default ButtonSearch;
