import React from 'react';
import PropTypes from 'prop-types';

function Category({ returnAPI }) {
  const values = Object.values(returnAPI)[0];
  const FIVE = 5;
  // TODO onclick mandando para url
  //   www.thecocktaildb.com/api/json/v1/1/filter.php?c=
  //   ou
  //   www.themealdb.com/api/json/v1/1/filter.php?c=
  return (
    <div>
      {
        values
        && values.slice(0, FIVE).map(({ strCategory }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
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
};

export default Category;
