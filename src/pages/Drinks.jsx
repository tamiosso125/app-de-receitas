import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks(props) {
  const { location: { pathname } } = props;
  return (
    <>
      <Header title="Drinks" buttonSearch buttonProfile route={ pathname } />
      <Footer />
    </>
  );
}

Drinks.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Drinks;
