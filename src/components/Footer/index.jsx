import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

import { MainFooter, FooterButton, ButtonImages } from './Footer.styled';

function Footer() {
  return (
    <MainFooter data-testid="footer">
      <Link to="/drinks">
        <FooterButton
          type="button"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
        >
          <ButtonImages src={ drinkIcon } alt="drink-tag" />
        </FooterButton>
      </Link>

      <Link to="/explore">
        <FooterButton
          type="button"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
        >
          <ButtonImages src={ exploreIcon } alt="explore-tag" />
        </FooterButton>
      </Link>

      <Link to="/foods">
        <FooterButton
          type="button"
          data-testid="food-bottom-btn"
          src={ mealIcon }
        >
          <ButtonImages src={ mealIcon } alt="food-tag" />
        </FooterButton>
      </Link>

    </MainFooter>
  );
}

export default Footer;
