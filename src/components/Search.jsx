import React, { useState } from 'react';

function Search() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div>
      <button
        type="button"
        data-testid="search-top-btn"
        value="qualquer"
      >
        qualquer
      </button>
      <button
        type="button"
        data-testid="search-input"
        value="qualquer"
      >
        qualquer
      </button>
      <form>
        <input
          type="text"
          placeholder="Search Recipe"
          value={ inputSearch }
          onChange={ ({ target: { value } }) => setInputSearch(value) }
        />
        <label htmlFor="ingredent">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="radio"
            id="name"
            data-testid="name-search-radio"
          />
        </label>
        <label htmlFor="firstLetter">
          First Letter
          <input
            type="radio"
            id="firstLetter"
            data-testid="first-letter-search-radio"
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
