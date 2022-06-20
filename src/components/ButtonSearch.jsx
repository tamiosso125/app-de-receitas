import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../images/searchIcon.svg';

function ButtonSearch({ showSearch }) {
  return (
    <button
      type="button"
      data-testid="search-top-btn"
      src={ SearchIcon }
      onClick={ showSearch }
    >
      <img src={ SearchIcon } alt="search" />
    </button>
  );
}

ButtonSearch.propTypes = {
  showSearch: PropTypes.func,
}.isRequired;

export default ButtonSearch;
