import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from '../context/ReceitasContext';

function Category({ returnAPI, pathname }) {
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
    console.log('entrou selected');
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
  return (
    <div>
      {
        values
        && values.slice(0, FIVE).map(({ strCategory }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ selectedCategory }
            value={ strCategory }
          >
            {strCategory}
          </button>
        ))
      }
    </div>
  );
}

Category.propTypes = {
  returnAPI: PropTypes.instanceOf(Object).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Category;
