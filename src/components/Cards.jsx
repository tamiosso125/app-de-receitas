import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function Cards({ returnAPI, size, pathname }) {
  const keyAPI = Object.keys(returnAPI)[0];
  const history = useHistory();
  const values = Object.values(returnAPI)[0];
  const isIngredientsPage = pathname.includes('ingredients');
  console.log(isIngredientsPage); // Verdadeiro se tiver ingredientes
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
  console.log(returnAPI[keyAPI]);
  console.log(values);
  return (
    <main>
      {values
      && Object.values(returnAPI)[0].slice(0, size).map((element, index) => (
        <Link
          key={ element.idMeal || element.idDrink }
          to={ !isIngredientsPage && `${pathname}/${element.idMeal || element.idDrink}` }
          onClick={ () => directsRecipes() }
        >
          <div
            data-testid={ isIngredientsPage
              ? `${index}-ingredient-card` : `${index}-recipe-card` }
          >
            <img
              src={ isIngredientsPage
                ? (`${urlImages[0]}${element.strIngredient}.png`
                || `${urlImages[1]}${element.strIngredient1}.png`)

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
