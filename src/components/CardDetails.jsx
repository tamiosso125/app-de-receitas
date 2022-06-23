import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CardDetails({ path }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const FetchApi = async () => {
      const urls = {
        urlFoods: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        urlDrinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      };
      const apiUrl = path === 'foods' ? urls.urlFoods : urls.urlDrinks;
      const request = await fetch(apiUrl);
      const result = await request.json();
      setCardData(result);
      console.log(Object.values(result)[0]);
      // Object.values(returnAPI)[0].slice(0, size).map((element, index)
    };

    FetchApi();
  }, []);
  console.log(cardData);
  return (
    <h1>teste</h1>
    // <>
    //   {cardData.map((data) => (
    //     <div key="" data-testid={ `${0}-recomendation-card` }>
    //       card
    //     </div>
    //   ))}
    // </>
  );
}

CardDetails.propTypes = {
  path: PropTypes.string,
}.isRequired;

export default CardDetails;
