import React from 'react';
import PropTypes from 'prop-types';
import ButtonSearch from './ButtonSearch';
import ButtonProfile from './ButtonProfile';

function Header({ title, buttonSearch, buttonProfile }) {
  return (
    <header>
      {buttonProfile && <ButtonProfile /> }
      <h1 data-testid="page-title">{title}</h1>
      { buttonSearch && <ButtonSearch /> }

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  buttonSearch: PropTypes.bool,
  buttonProfile: PropTypes.bool,
}.isRequired;

export default Header;
