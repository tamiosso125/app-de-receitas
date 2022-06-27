import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from './ReceitasContext';

function RecipesProvider({ children }) {
  const [urlAPI, setUrlAPI] = useState('');
  const [data, setData] = useState({});
  const [categoryAPI, setCategoryAPI] = useState('');
  const [categoryData, setCategoryData] = useState({});
  const [ableToRedirect, setAbleToRedirect] = useState(false);
  const [urlRedirect, setUrlRedirect] = useState('');

  useEffect(() => {
    const fetchFunc = async () => {
      const request = await fetch(urlAPI);
      const requestJson = await request.json();
      setData(requestJson);
    };
    if (!urlAPI) return;
    // Caso a URL estejá vazia o fetch não é feito, evitando erro
    fetchFunc();
  }, [urlAPI]);

  useEffect(() => {
    const fetchFunc = async () => {
      const requestCategory = await fetch(categoryAPI);
      const requestCategoryJson = await requestCategory.json();
      setCategoryData(requestCategoryJson);
    };
    if (!categoryAPI) return;

    fetchFunc();
  }, [categoryAPI]);

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
  // const doneRecipesLocal = {
  //   id: idMeal || idDrink,
  //   type: strMeal || strDrink,
  //   nationality: strArea || '',
  //   category: resultType.strCategory || '',
  //   alcoholicOrNot: strAlcoholic || '',
  //   name: strMeal || strDrink,
  //   image: resultType.strMealThumb || resultType.strDrinkThumb,
  // };

  const context = {
    data,
    urlAPI,
    setUrlAPI,
    ableToRedirect,
    setAbleToRedirect,
    urlRedirect,
    categoryData,
    setCategoryData,
    setCategoryAPI,
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
