import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../images/searchIcon.svg';

function ButtonSearch() {
  return (
    <Link to="/explore">
      <button
        type="button"
        data-testid="search-top-btn"
        src={ SearchIcon }
      >
        <img src={ SearchIcon } alt="search" />
      </button>
    </Link>
  );
}

export default ButtonSearch;
