import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';

function ExploreDrinksFoods(props) {
  const { location: { pathname } } = props;
  console.log(pathname);
  // /explore/drinks
  // /explore/foods
  return (
    <>
      <Header title={ titleGenerator(pathname) } buttonProfile />
      <Link to={ `${pathname}/ingredients` }>
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      {!pathname.includes('drinks')
        && (
          <Link to="/explore/foods/nationalities">
            <button
              type="button"
              data-testid="explore-by-nationality"
            >
              By Nationality
            </button>
          </Link>
        )}
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}

ExploreDrinksFoods.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ExploreDrinksFoods;
