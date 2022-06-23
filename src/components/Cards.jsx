import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Cards({ returnAPI, size, pathname }) {
  const keyAPI = Object.keys(returnAPI)[0];
  return (
    <main>
      {returnAPI[keyAPI] !== null
      && Object.values(returnAPI)[0].slice(0, size).map((element, index) => (
        <Link
          key={ element.idMeal || element.idDrink }
          to={ `${pathname}/${element.idMeal || element.idDrink}` }
        >
          <div
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ element.strMealThumb || element.strDrinkThumb }
              alt={ element.strMeal || element.strDrink }
              width="80px" // Só para facilitar visualização até o momento.
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              {element.strMeal || element.strDrink }
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
}

Cards.propTypes = {
  returnAPI: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Cards;
