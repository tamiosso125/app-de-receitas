import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ReceitasContext from './ReceitasContext';

function RecipesProvider({ children }) {
  const [urlAPI, setUrlAPI] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const [data, setData] = useState({});
  const history = useHistory();

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
      history.push(`/foods/${idMeal}`);
    }
    if (drinks && drinks.length === 1) {
      const { idDrink } = drinks[0];
      history.push(`/drinks/${idDrink}`);
    }
    if (meals === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [data, history]);

  const context = {
    data,
    urlAPI,
    setUrlAPI,
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
