import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <>
      <Header title="Favorite Recipes" buttonProfile />
      <nav>
        <button
          data-testid="filter-by-all-btn"
          type="button"
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks
        </button>
      </nav>
      {recipes && recipes.map(({
        id,
        image,
        name,
        category,
        nationality,
        alcoholicOrNot,
        type,
      }, index) => (
        <div key={ id }>
          <Link to={ `/${type}s/${id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ image }
              alt={ name }
              width="80px"
            />
            <p
              data-testid={ `${index}-horizontal-name` }
            >
              {name}
            </p>
          </Link>
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${nationality || alcoholicOrNot} - ${category}`}
          </p>
          <ShareButton index={ index } id={ id } type={ type } />
          <button
            data-testid={ `${index}-horizontal-favorite-btn` }
            type="button"
            src={ blackHeartIcon }
          >
            <img src={ blackHeartIcon } alt="blackHeart Icon" />
          </button>
        </div>
      ))}
    </>
  );
}

export default FavoriteRecipes;
