import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';

function Explore(props) {
  const { location: { pathname } } = props;
  return (
    <>
      <Header title={ titleGenerator(pathname) } buttonProfile />
      <Link to="/explore/foods">
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </Link>
      <Footer />
    </>
  );
}

Explore.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Explore;
