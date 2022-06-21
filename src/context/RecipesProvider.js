import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';

function RecipesProvider({ children }) {
  const [urlAPI, setUrlAPI] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const [data, setData] = useState({});
  const [ableToRedirect, setAbleToRedirect] = useState(false);
  const [urlRedirect, setUrlRedirect] = useState('');

  useEffect(() => {
    const fetchFunc = async () => {
      const request = await fetch(urlAPI);
      const requestJson = await request.json();
      setData(requestJson);
    };
    fetchFunc();
  }, [urlAPI]);

  useEffect(() => {
    const { meals, drinks } = data;
    if (meals && meals.length === 1) {
      const { idMeal } = meals[0];
      setAbleToRedirect(true);
      setUrlRedirect(`/foods/${idMeal}`);
    }
    if (drinks && drinks.length === 1) {
      const { idDrink } = drinks[0];
      setAbleToRedirect(true);
      setUrlRedirect(`/drinks/${idDrink}`);
    }
    if (meals === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [data]);

  const context = {
    data,
    urlAPI,
    setUrlAPI,
    ableToRedirect,
    setAbleToRedirect,
    urlRedirect,
  };
  return (
    <ReceitasContext.Provider value={ context }>
      {children}
    </ReceitasContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default RecipesProvider;
