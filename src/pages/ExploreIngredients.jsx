import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReceitasContext from '../context/ReceitasContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import titleGenerator from '../services/titleGenerator';
import Cards from '../components/Cards';
import Loading from '../components/Loading';

function ExploreIngredients() {
  const location = useLocation();
  const { pathname } = location;
  const [loading, setLoading] = useState(true);
  const { data, setUrlAPI } = useContext(ReceitasContext);
  useEffect(() => {
    const setDataIngredients = async () => {
      if (pathname.includes('drinks')) {
        setUrlAPI('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      } else {
        setUrlAPI('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      }
    };
    setDataIngredients();
  }, []);
  const values = Object.values(data)[0];
  useEffect(() => {
    if (values) {
      setLoading(false);
    }
  }, [values]);
  // titleGenerator(pathname)
  return (
    <>
      <Header title="Explore Ingredients" buttonProfile />
      {loading
        ? <Loading />
        : <Cards size={ 12 } returnAPI={ data } />}
      <Footer />
    </>
  );
}

export default ExploreIngredients;
