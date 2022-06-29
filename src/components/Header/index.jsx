import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonSearch from '../ButtonSearch';
import ButtonProfile from '../ButtonProfile';
import Search from '../Search';

import { HeaderContainer, HeaderTitle } from './Header.styled';

function Header({ title, buttonSearch, buttonProfile }) {
  const [searchInput, setSearchInput] = useState(false);

  const showSearchInput = () => {
    setSearchInput(!searchInput);
  };

  return (
    <>
      <HeaderContainer>
        {buttonProfile && <ButtonProfile /> }
        <HeaderTitle data-testid="page-title">{title}</HeaderTitle>
        { buttonSearch && <ButtonSearch showSearch={ showSearchInput } /> }
      </HeaderContainer>
      { searchInput && <Search /> }
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  buttonSearch: PropTypes.bool,
  buttonProfile: PropTypes.bool,
}.isRequired;

export default Header;
