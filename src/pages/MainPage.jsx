import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';
import ReceitasContext from '../context/ReceitasContext';
import Loading from '../components/Loading';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Category from '../components/Category';

function MainPage() {
  const location = useLocation();
  const { pathname } = location;
  const { data, setUrlAPI, setCategoryAPI, categoryData } = useContext(ReceitasContext);
  const [loading, setLoading] = useState(true);
  const [changePoint, setChangePoint] = useState(pathname);
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const categoryList = [
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  ];
  useEffect(() => {
    setChangePoint(pathname);
    setLoading(true);
  }, [pathname]);
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
  }, [changePoint]);
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
        title={ titleGenerator(changePoint) }
        buttonSearch
        buttonProfile
      />
      {loading
        ? <Loading />
        : (
          <div>
            <Category returnAPI={ categoryData } />
            <Cards size={ 12 } returnAPI={ data } />
          </div>
        )}
      <Footer />
    </>
  );
}

export default MainPage;
