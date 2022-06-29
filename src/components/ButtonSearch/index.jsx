import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../images/searchIcon.svg';

import { SearchButton, SearchImage } from './ButtonSearch.styled';

function ButtonSearch({ showSearch }) {
  return (
    <SearchButton
      type="button"
      data-testid="search-top-btn"
      src={ SearchIcon }
      onClick={ showSearch }
    >
      <SearchImage src={ SearchIcon } alt="search" />
    </SearchButton>
  );
}

ButtonSearch.propTypes = {
  showSearch: PropTypes.func,
}.isRequired;

export default ButtonSearch;
