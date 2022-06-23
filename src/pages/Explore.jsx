import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';

function Explore(props) {
  const { location: { pathname } } = props;
  return (
    <>
      <Header title={ titleGenerator(pathname) } buttonProfile />
      <Footer />
    </>
  );
}

Explore.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Explore;
