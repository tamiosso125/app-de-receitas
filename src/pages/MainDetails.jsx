import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function MainDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [dataItem, setDataItem] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const ApiUrls = {
        urlFoods: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        urlDrinks: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
      };
      const { pathname } = location;
      const type = pathname.split('/')[1];
      const { urlFoods, urlDrinks } = ApiUrls;
      const url = type === 'foods' ? urlFoods : urlDrinks;
      const request = await fetch(url);
      const result = await request.json();
      setDataItem(result.meals[0]);
      console.log(result.meals[0]);
    };

    fetchApi();
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" src={ dataItem?.strMealThumb } alt="recipe" />
      <h1 data-testid="recipe-title">{dataItem?.strMeal}</h1>
      <button type="button" data-testid="share-btn">share</button>
      <p type="button" data-testid="favorite-btn">fav</p>
      <p data-testid="recipe-category">{ dataItem?.strCategory }</p>
      <p data-testid={ `${0}-ingredient-name-and-measure` }>ingrediente</p>
      <p data-testid="instructions">{dataItem?.strInstructions}</p>
      <video data-testid="video" width="144" height="144" src={ dataItem?.strYoutube }>
        <track
          default
          kind="captions"
        />
      </video>
      <div data-testid={ `${0}-recomendation-card` } />
      <button type="button" data-testid="start-recipe-btn">start</button>
    </div>
  );
}

export default MainDetails;
