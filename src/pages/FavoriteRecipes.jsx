import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const defaultRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filterType, setFilterType] = useState('');
  const [recipes, setRecipes] = useState(defaultRecipes);
  const newLocalStorage = (idDelete) => {
    const newRecipes = recipes.filter(({ id }) => id !== idDelete);
    setRecipes(newRecipes);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newRecipes));
  };
  return (
    <>
      <Header title="Favorite Recipes" buttonProfile />
      <nav>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setFilterType('') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setFilterType('drink') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setFilterType('food') }

        >
          Drinks
        </button>
      </nav>
      {recipes && recipes.filter(({ type }) => type !== filterType).map(({
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
            onClick={ () => newLocalStorage(id) }
          >
            <img src={ blackHeartIcon } alt="blackHeart Icon" />
          </button>
        </div>
      ))}
    </>
  );
}

export default FavoriteRecipes;
