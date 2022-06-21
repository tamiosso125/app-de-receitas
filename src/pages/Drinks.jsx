import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Drinks(props) {
  const { location: { pathname } } = props;
  return (
    <Header title="Drinks" buttonSearch buttonProfile route={ pathname } />
  );
}

Drinks.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Drinks;
