import React from 'react';
import PropTypes from 'prop-types';

function Cards({ returnAPI, size }) {
  const keyAPI = Object.keys(returnAPI)[0];
  console.log('key retornanda pela API', keyAPI);
  console.log('Valor contido na key', returnAPI[keyAPI]);
  return (
    <main>
      {returnAPI[keyAPI] !== null
      && Object.values(returnAPI)[0].slice(0, size).map((element, index) => (
        <div
          key={ element.idMeal || element.idDrink }
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
      ))}
    </main>
  );
}

Cards.propTypes = {
  returnAPI: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.number.isRequired,
};

export default Cards;
