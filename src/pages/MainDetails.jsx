import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import fetchDetailsApi from '../services/api';
import {
  generateNewObj,
  verifyId,
  getFavorites,
  changeFavorite } from '../services/details';
import CardDetails from '../components/CardDetails';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function MainDetails() {
  const [favorite, setFavorite] = useState(whiteHeartIcon);
  const [linkCopied, setLinkCopied] = useState(false);
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
    nationality: '',
    categoryDrink: '',
  });

  let doneRecipe = [{}];
  if (localStorage.getItem('doneRecipes')) {
    doneRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
  }

  const { pathname } = location;
  const type = pathname.split('/')[1];
  const idType = {
    id,
    type,
  };

  useEffect(() => {
    const setData = async () => {
      const result = await fetchDetailsApi(id, type);
      const resultType = type === 'foods' ? result.meals[0] : result.drinks[0];
      console.log(resultType);
      return setDataItem(generateNewObj(resultType, type));
    };
    verifyId(setBtnTitle, id);
    setData();
    getFavorites(id, setFavorite);
  }, []);
  const copyLink = () => {
    setLinkCopied(true);
    const pathLink = `http://localhost:3000${pathname}`;
    copy(pathLink);
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ dataItem.thumb }
        className="imageDetails"
        alt="recipe"
      />
      <h1 data-testid="recipe-title">{dataItem.title}</h1>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyLink }
      >
        <img src={ shareIcon } alt={ shareIcon } />
      </button>
      {linkCopied && <p>Link copied!</p>}
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => changeFavorite(idType, dataItem, setFavorite, favorite) }
        src={ favorite }
      >
        <img src={ favorite } alt={ favorite } />
      </button>
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
        <Link to={ `/${type}/${id}/in-progress` }>
          <button
            className="startBtn"
            type="button"
            data-testid="start-recipe-btn"
          >
            {btnTitle}
          </button>
        </Link>
      )}
    </div>
  );
}

export default MainDetails;
