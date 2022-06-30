import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import titleGenerator from '../../services/titleGenerator';

import { ExploreButton, ExploreContainer } from './Explore.styled';
import GlobalStyle from '../../style/GlobalStyle';

function Explore() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <GlobalStyle />
      <Header title={ titleGenerator(pathname) } buttonProfile />
      <ExploreContainer>
        <Link to="/explore/foods">
          <ExploreButton
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </ExploreButton>
        </Link>
        <Link to="/explore/drinks">
          <ExploreButton
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </ExploreButton>
        </Link>
      </ExploreContainer>
      <Footer />
    </>
  );
}

export default Explore;
