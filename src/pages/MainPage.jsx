import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';
import ReceitasContext from '../context/ReceitasContext';
import Loading from '../components/Loading';
import Cards from '../components/Cards';

function MainPage(props) {
  const { location: { pathname } } = props;
  const { data, setUrlAPI } = useContext(ReceitasContext);
  const [loading, setLoading] = useState(true);
  console.log('Retorno da API', data);
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  useEffect(() => {
    const changeURL = () => {
      if (pathname === '/drinks') {
        setUrlAPI(urlDrinks);
      } else {
        setUrlAPI(urlFoods);
      }
    };
    changeURL();
  }, []);
  useEffect(() => {
    const controlLoading = () => {
      console.log('Rodou');
      if (data.meals || data.drinks) {
        setLoading(false);
      }
    };
    controlLoading();
  }, [data]);
  return (
    <>
      <Header
        title={ titleGenerator(pathname) }
        buttonSearch
        buttonProfile
        route={ pathname }
      />
      {loading && <Loading />}
      {!loading && <Cards size={ 12 } returnAPI={ data } />}
    </>
  );
}

MainPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default MainPage;
