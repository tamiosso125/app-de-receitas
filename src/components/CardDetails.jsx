import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-elastic-carousel';

function CardDetails({ path }) {
  const [cardData, setCardData] = useState({ meals: [] });
  const keyAPI = Object.keys(cardData)[0];
  const SIX = 6;
  useEffect(() => {
    const FetchApi = async () => {
      const urls = {
        urlFoods: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        urlDrinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      };
      const apiUrl = path === 'foods' ? urls.urlDrinks : urls.urlFoods;
      console.log('apiUrl: ', apiUrl);
      const request = await fetch(apiUrl);
      const result = await request.json();
      setCardData(result);
    };
    console.log('SOCORRO');
    FetchApi();
  }, []);

  const breakPoints = [
    {
      width: 2,
      itemsToShow: 2,
      itemsToScroll: 2,
    },
    {
      width: 550,
      itemsToShow: 2,
      itemsToScroll: 2,
    },
    {
      width: 768,
      itemsToShow: 2,
      itemsToScroll: 2,
    },
    {
      width: 1200,
      itemsToShow: 2,
      itemsToScroll: 2,
    },
  ];
  // console.log('Card: ', cardData);
  return (
    <div className="CardContainer">
      <Carousel breakPoints={ breakPoints }>
        {cardData[keyAPI] !== null
        && Object.values(cardData)[0].slice(0, SIX).map((element, index) => (
          <div
            key={ element.idMeal || element.idDrink }
            data-testid={ `${index}-recomendation-card` }
            className="Card"
          >
            <img
              className="imageDetails"
              src={ element.strMealThumb || element.strDrinkThumb }
              alt={ element.strMeal || element.strDrink }
            />
            <p className="carousel-title">
              {element.strCategory || element.strAlcoholic }
            </p>
            <p
              data-testid={ `${index}-recomendation-title` }
              className="carousel-title"
            >
              {element.strMeal || element.strDrink }
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

CardDetails.propTypes = {
  path: PropTypes.string,
  // idDetails: PropTypes.string,
}.isRequired;

export default CardDetails;
