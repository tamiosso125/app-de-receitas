import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from '../context/ReceitasContext';

function Search({ location: { pathname } }) {
  const [inputSearch, setInputSearch] = useState('');
  const [radioOption, setRadioOption] = useState('');

  const { setUrlAPI } = useContext(ReceitasContext);
  const endpoint = [
    'https://www.themealdb.com/api/json/v1/1/',
    'https://www.thecocktaildb.com/api/json/v1/1/',
  ];

  const selectedOption = [
    'filter.php?i=',
    'search.php?s=',
    'search.php?f=',
  ];
  const handleSubmit = () => {
    let url = '';
    if (pathname === '/foods') {
      console.log('/foods');
      switch (radioOption) {
      case 'ingredient':
        url = endpoint[0] + selectedOption[0] + inputSearch;
        break;
      case 'name':
        url = endpoint[0] + selectedOption[1] + inputSearch;
        break;
      case 'firstLetter':
        if (inputSearch.length === 1) {
          url = endpoint[0] + selectedOption[2] + inputSearch;
        } else {
          global.alert('Your search must have only 1 (one) character');
        }
        break;
      default:
        return 'erro';
      }
      setUrlAPI(url);
    } else if (pathname === '/drinks') {
      switch (radioOption) {
      case 'ingredient':
        url = endpoint[1] + selectedOption[0] + inputSearch;
        break;
      case 'name':
        url = endpoint[1] + selectedOption[1] + inputSearch;
        break;
      case 'firstLetter':
        if (inputSearch.length === 1) {
          url = endpoint[1] + selectedOption[2] + inputSearch;
        } else {
          global.alert('Your search must have only 1 (one) character');
        }
        break;
      default:
        return 'erro';
      }
      setUrlAPI(url);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="search-top-btn"
        value="qualquer"
      >
        qualquer
      </button>
      <form>
        <input
          type="text"
          placeholder="Search Recipe"
          data-testid="search-input"
          value={ inputSearch }
          onChange={ ({ target: { value } }) => setInputSearch(value) }
        />
        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            name="filter"
            data-testid="ingredient-search-radio"
            onChange={ () => setRadioOption('ingredient') }

          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="radio"
            id="name"
            name="filter"
            data-testid="name-search-radio"
            onChange={ () => setRadioOption('name') }
          />
        </label>
        <label htmlFor="firstLetter">
          First Letter
          <input
            type="radio"
            id="firstLetter"
            name="filter"
            data-testid="first-letter-search-radio"
            onChange={ () => setRadioOption('firstLetter') }
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => handleSubmit() }
        >
          Search
        </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Search;
