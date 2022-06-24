import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReceitasContext from '../context/ReceitasContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import titleGenerator from '../services/titleGenerator';
import Cards from '../components/Cards';
// import Loading from '../components/Loading';

function ExploreIngredients(props) {
  const { location: { pathname } } = props;
  const { data } = useContext(ReceitasContext);
  console.log('Valor da api', data);
  return (
    <>
      <Header title={ titleGenerator(pathname) } buttonProfile />
      <Cards size={ 12 } returnAPI={ data } pathname={ pathname } />
      <Footer />
    </>
  );
}

ExploreIngredients.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ExploreIngredients;
