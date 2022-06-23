import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import fetchDetailsApi from '../services/api';
import { filterMeasure, filterIngredients } from '../services/filters';
import CardDetails from '../components/CardDetails';

function MainDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [dataItem, setDataItem] = useState({
    thumb: '',
    title: '',
    category: '',
    video: '',
    ingredients: [],
    measure: [],
  });
  const doneRecipe = localStorage.getItem('doneRecipes');
  const { pathname } = location;
  const type = pathname.split('/')[1];
  const generateNewObj = (resultType) => {
    const newObj = {
      thumb: type === 'foods' ? resultType.strMealThumb : resultType.strDrinkThumb,
      title: type === 'foods' ? resultType.strMeal : resultType.strDrink,
      category: type === 'foods' ? resultType.strCategory : resultType.strAlcoholic,
      instructions: resultType.strInstructions,
      video: type === 'foods' ? resultType.strYoutube : null,
      ingredients: filterIngredients(resultType),
      measure: filterMeasure(resultType),
    };
    return (newObj);
  };

  useEffect(() => {
    const setData = async () => {
      const result = await fetchDetailsApi(id, type);
      const resultType = type === 'foods' ? result.meals[0] : result.drinks[0];
      return setDataItem(generateNewObj(resultType));
    };
    setData();
  }, []);

  console.log(typeof doneRecipe);
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ dataItem.thumb }
        className="imageDetails"
        alt="recipe"
      />
      <h1 data-testid="recipe-title">{dataItem.title}</h1>
      <button type="button" data-testid="share-btn">share</button>
      <p type="button" data-testid="favorite-btn">fav</p>
      <p data-testid="recipe-category">{ dataItem.category }</p>
      {dataItem.ingredients.map((ingredient, index) => (
        <p
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {`${ingredient} ${dataItem.measure[index]}`}
        </p>
      ))}
      <p data-testid="instructions">{dataItem.instructions}</p>
      {type === 'drinks ' ? ''
        : (
          <video
            data-testid="video"
            width="144"
            height="144"
            src={ dataItem.video }
          >
            <track
              default
              kind="captions"
            />
          </video>
        )}

      <CardDetails path={ type } />
      {/* {filterDoneRecipe() ? '' : (
        <button
          className="startBtn"
          type="button"
          data-testid="start-recipe-btn"
        >
          Start Recipe
        </button>)} */}
    </div>
  );
}

export default MainDetails;
