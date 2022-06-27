import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function Cards({ returnAPI, size }) {
  const history = useHistory();
  const { location: { pathname } } = history;
  const values = Object.values(returnAPI)[0];
  const isIngredientsPage = pathname.includes('ingredients');
  const urlImages = ['https://www.themealdb.com/images/ingredients/',
    'https://www.thecocktaildb.com/images/ingredients/'];
  const directsRecipes = () => {
    if (isIngredientsPage) {
      // Pegar a categoria e disapar o fetch
      if (pathname.includes('foods')) {
        history.push('/foods');
      } else {
        history.push('/drinks');
      }
    }
  };
  return (
    <main>
      {values
      && Object.values(returnAPI)[0].slice(0, size).map((element, index) => {
        const generateUrlImage = () => {
          if (pathname.includes('drinks')) {
            return `${urlImages[1] + element.strIngredient1}-Small.png`;
          }
          return (`${urlImages[0] + element.strIngredient}-Small.png`);
        };
        return (
          <Link
            key={ element.idMeal || element.idDrink || index }
            to={ !isIngredientsPage
              && `${pathname}/${element.idMeal || element.idDrink}` }
            onClick={ () => directsRecipes() }
          >
            <div
              data-testid={ isIngredientsPage
                ? `${index}-ingredient-card` : `${index}-recipe-card` }
            >
              <img
                src={ isIngredientsPage
                  ? generateUrlImage()

                  : (element.strMealThumb
                || element.strDrinkThumb) }
                alt={ isIngredientsPage
                  ? element.strIngredient || element.strIngredient1
                  : element.strMeal || element.strDrink }
                width="80px" // Só para facilitar visualização até o momento.
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>
                { isIngredientsPage
                  ? element.strIngredient || element.strIngredient1
                  : element.strMeal || element.strDrink }
              </p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}

Cards.propTypes = {
  returnAPI: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.number.isRequired,
};

export default Cards;
