import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';
import ReceitasContext from '../context/ReceitasContext';
import Loading from '../components/Loading';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Category from '../components/Category';

function MainPage(props) {
  const { location: { pathname } } = props;
  const { data, setUrlAPI, setCategoryAPI, categoryData } = useContext(ReceitasContext);
  const [loading, setLoading] = useState(true);
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const categoryList = [
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  ];
  useEffect(() => {
    const changeURL = () => {
      if (pathname === '/drinks') {
        setUrlAPI(urlDrinks);
        setCategoryAPI(categoryList[1]);
      } else {
        setUrlAPI(urlFoods);
        setCategoryAPI(categoryList[0]);
      }
    };
    changeURL();
  }, []);
  useEffect(() => {
    const controlLoading = () => {
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
      {!loading && (
        <div>
          <Category returnAPI={ categoryData } pathname={ pathname } />
          <Cards size={ 12 } returnAPI={ data } pathname={ pathname } />
        </div>
      )}
      <Footer />
    </>
  );
}

MainPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default MainPage;
