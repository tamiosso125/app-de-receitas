import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonSearch from './ButtonSearch';
import ButtonProfile from './ButtonProfile';
import Search from './Search';

function Header({ title, buttonSearch, buttonProfile }) {
  const [searchInput, setSearchInput] = useState(false);

  const showSearchInput = () => {
    setSearchInput(!searchInput);
  };

  return (
    <header>
      {buttonProfile && <ButtonProfile /> }
      <h1 data-testid="page-title">{title}</h1>
      { buttonSearch && <ButtonSearch showSearch={ showSearchInput } /> }
      { searchInput && <Search /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  buttonSearch: PropTypes.bool,
  buttonProfile: PropTypes.bool,
}.isRequired;

export default Header;
