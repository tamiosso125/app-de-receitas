import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ReceitasContext from '../../context/ReceitasContext';

import {
  CategoryContainer,
  ButtonContainer,
  ButtonAll,
  ButtonCategory } from './Category.styled';

function Category({ returnAPI }) {
  const location = useLocation();
  const { pathname } = location;
  const { urlAPI, setUrlAPI } = useContext(ReceitasContext);
  const values = Object.values(returnAPI)[0];
  const FIVE = 5;
  const endpointList = [
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  ];

  const defaultEndpoint = [
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  ];

  const selectedCategory = ({ target }) => {
    const { value } = target;
    if (pathname === '/drinks') {
      const urlFilter = endpointList[0] + value;
      if (urlFilter === urlAPI) {
        setUrlAPI(defaultEndpoint[0]);
      } else {
        setUrlAPI(endpointList[0] + value);
      }
    } else {
      const urlFilter = endpointList[1] + value;
      if (urlFilter === urlAPI) {
        setUrlAPI(defaultEndpoint[1]);
      } else {
        setUrlAPI(endpointList[1] + value);
      }
    }
  };

  const resetFilter = () => {
    if (pathname === '/drinks') {
      setUrlAPI(defaultEndpoint[0]);
    } else {
      setUrlAPI(defaultEndpoint[1]);
    }
  };

  return (
    <CategoryContainer>
      {
        values
        && (
          <ButtonContainer>
            <ButtonAll
              type="button"
              data-testid="All-category-filter"
              onClick={ resetFilter }
            >
              All
            </ButtonAll>
            {values.slice(0, FIVE).map(({ strCategory }, index) => (
              <ButtonCategory
                type="button"
                key={ index }
                data-testid={ `${strCategory}-category-filter` }
                onClick={ selectedCategory }
                value={ strCategory }
              >
                {strCategory}
              </ButtonCategory>))}
          </ButtonContainer>
        )
      }
    </CategoryContainer>
  );
}

Category.propTypes = {
  returnAPI: PropTypes.instanceOf(Object).isRequired,
};

export default Category;
