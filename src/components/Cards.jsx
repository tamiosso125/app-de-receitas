import React from 'react';
import PropTypes from 'prop-types';

function Cards({ returnAPI }) {
  console.log(Object.values(returnAPI)[0]);
  return (
    <main>
      {
        Object.values(returnAPI)[0].map((element, index) => (
          <div
            key={ element.idMeal || element.idDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ element.strMealThumb || element.strDrinkThumb }
              alt={ element.strMeal || element.strDrink }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              {element.strMeal || element.strDrink }
            </p>
          </div>
        ))
      }
    </main>
  );
}

Cards.propTypes = {
  returnAPI: PropTypes.instanceOf(Object).isRequired,
};

export default Cards;
