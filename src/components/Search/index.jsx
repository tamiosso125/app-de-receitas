import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import ReceitasContext from '../../context/ReceitasContext';

import {
  FormContainer,
  Form,
  FormTextInput,
  FormRadio,
  FormLabel,
  RadioContainer,
  SearchButton,
  SearchContainer } from './Search.styled';

function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const [radioOption, setRadioOption] = useState('');

  const history = useHistory();
  const { location: { pathname } } = history;
  const {
    setUrlAPI,
    urlRedirect,
    ableToRedirect,
    setAbleToRedirect,
  } = useContext(ReceitasContext);

  const endpoint = [
    'https://www.themealdb.com/api/json/v1/1/',
    'https://www.thecocktaildb.com/api/json/v1/1/',
  ];

  const selectedOption = [
    'filter.php?i=',
    'search.php?s=',
    'search.php?f=',
  ];

  useEffect(() => {
    const redirect = () => {
      if (ableToRedirect) {
        setAbleToRedirect(false);
        history.push(urlRedirect);
      }
    };

    redirect();
  }, [urlRedirect]);

  const handleSubmit = () => {
    let url = '';
    if (pathname === '/foods') {
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
    <FormContainer>
      <Form>
        <SearchContainer>
          <FormTextInput
            type="text"
            placeholder="Search Recipe"
            data-testid="search-input"
            value={ inputSearch }
            onChange={ ({ target: { value } }) => setInputSearch(value) }
          />
          <SearchButton
            type="button"
            data-testid="exec-search-btn"
            onClick={ () => handleSubmit() }
          >
            <AiOutlineSearch />
          </SearchButton>
        </SearchContainer>
        <RadioContainer>
          <FormLabel htmlFor="ingredient">
            Ingredient
            <FormRadio
              type="radio"
              id="ingredient"
              name="filter"
              data-testid="ingredient-search-radio"
              onChange={ () => setRadioOption('ingredient') }

            />
          </FormLabel>
          <FormLabel htmlFor="name">
            Name
            <FormRadio
              type="radio"
              id="name"
              name="filter"
              data-testid="name-search-radio"
              onChange={ () => setRadioOption('name') }
            />
          </FormLabel>
          <FormLabel htmlFor="firstLetter">
            First Letter
            <FormRadio
              type="radio"
              id="firstLetter"
              name="filter"
              data-testid="first-letter-search-radio"
              onChange={ () => setRadioOption('firstLetter') }
            />
          </FormLabel>
        </RadioContainer>
      </Form>
    </FormContainer>
  );
}

export default Search;
