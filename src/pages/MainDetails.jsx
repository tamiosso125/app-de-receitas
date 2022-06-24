import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import fetchDetailsApi from '../services/api';
import { generateNewObj, verifyId } from '../services/filters';
import CardDetails from '../components/CardDetails';

function MainDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [btnTitle, setBtnTitle] = useState('Start Recipe');
  const [dataItem, setDataItem] = useState({
    thumb: '',
    title: '',
    category: '',
    video: '',
    ingredients: [],
    measure: [],
  });

  let doneRecipe = [{}];
  if (localStorage.getItem('doneRecipes')) {
    doneRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
  }

  const { pathname } = location;
  const type = pathname.split('/')[1];

  useEffect(() => {
    const setData = async () => {
      const result = await fetchDetailsApi(id, type);
      const resultType = type === 'foods' ? result.meals[0] : result.drinks[0];
      return setDataItem(generateNewObj(resultType, type));
    };
    verifyId(setBtnTitle, id);
    setData();
  }, []);

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
      { !doneRecipe.some((recipe) => recipe.id === id) && (
        <button
          className="startBtn"
          type="button"
          data-testid="start-recipe-btn"
        >
          { btnTitle }
        </button>)}
    </div>
  );
}

export default MainDetails;
