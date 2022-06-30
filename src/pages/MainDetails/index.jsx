import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import fetchDetailsApi from '../../services/api';
import {
  generateNewObj,
  verifyId,
  getFavorites,
  changeFavorite } from '../../services/details';
import CardDetails from '../../components/CardDetails';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

import {
  MainDetailsDiv,
  DetailsImage,
  DetailsTitle,
  RecipeCategory,
  Ingredients,
  StartButton,
  ImageContainer,
  SectionContainer,
  ButtonDetails,
  ButtonImage,
  LinkCopied,
  Instructions,
  StartContainer,
} from './MainDetails.styled';

import GlobalStyle from '../../style/GlobalStyle';

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
    <MainDetailsDiv>
      <GlobalStyle />
      <ImageContainer>
        <DetailsImage
          data-testid="recipe-photo"
          src={ dataItem.thumb }
          className="imageDetails"
          alt="recipe"
        />
      </ImageContainer>
      <SectionContainer>
        <ButtonDetails
          type="button"
          data-testid="share-btn"
          onClick={ copyLink }
        >
          <ButtonImage src={ shareIcon } alt={ shareIcon } />
        </ButtonDetails>
        <ButtonDetails
          type="button"
          data-testid="favorite-btn"
          onClick={ () => changeFavorite(idType, dataItem, setFavorite, favorite) }
          src={ favorite }
        >
          <ButtonImage src={ favorite } alt={ favorite } />
        </ButtonDetails>
        {linkCopied && <LinkCopied>Link copied!</LinkCopied>}
        <DetailsTitle data-testid="recipe-title">{dataItem.title}</DetailsTitle>
        <RecipeCategory data-testid="recipe-category">
          { dataItem.category }
        </RecipeCategory>
        {dataItem.ingredients.map((ingredient, index) => (
          <Ingredients
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} ${dataItem.measure[index]}`}
          </Ingredients>
        ))}
        <Instructions data-testid="instructions">{dataItem.instructions}</Instructions>
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
          <StartContainer>
            <Link to={ `/${type}/${id}/in-progress` }>
              <StartButton
                className="startBtn"
                type="button"
                data-testid="start-recipe-btn"
              >
                {btnTitle}
              </StartButton>
            </Link>
          </StartContainer>
        )}
      </SectionContainer>
    </MainDetailsDiv>
  );
}

export default MainDetails;
