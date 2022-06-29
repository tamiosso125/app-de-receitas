import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ReceitasContext from '../../context/ReceitasContext';
import cardPathGenerator from '../../services/cardPathGenerator';

import {
  CardContainer,
  CardImage,
  FoodName,
  FoodLink,
} from './Cards.styled';

function Cards({ returnAPI, size }) {
  const history = useHistory();
  const { setPreviousPath } = useContext(ReceitasContext);
  const { location: { pathname } } = history;
  const values = Object.values(returnAPI)[0];
  const isIngredientsPage = pathname.includes('ingredients');
  const urlImages = ['https://www.themealdb.com/images/ingredients/',
    'https://www.thecocktaildb.com/images/ingredients/'];
  const directsRecipes = (ingredient) => {
    console.log('nome', ingredient);
    if (isIngredientsPage) {
      if (pathname.includes('foods')) {
        setPreviousPath(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        history.push('/foods');
      } else {
        setPreviousPath(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
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
        const nameCreator = () => {
          if (isIngredientsPage) {
            return element.strIngredient || element.strIngredient1;
          }
          return element.strMeal || element.strDrink;
        };

        return (
          <FoodLink
            key={ element.idMeal || element.idDrink || index }
            to={ !isIngredientsPage
              && cardPathGenerator(pathname, element) }
            onClick={ () => directsRecipes(nameCreator()) }
          >
            <CardContainer
              data-testid={ isIngredientsPage
                ? `${index}-ingredient-card` : `${index}-recipe-card` }
            >
              <CardImage
                src={ isIngredientsPage
                  ? generateUrlImage()
                  : (element.strMealThumb || element.strDrinkThumb) }
                alt={ nameCreator() }
                data-testid={ `${index}-card-img` }
              />
              <FoodName data-testid={ `${index}-card-name` }>
                { nameCreator() }
              </FoodName>
            </CardContainer>
          </FoodLink>
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
