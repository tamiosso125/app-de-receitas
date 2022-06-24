import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export const filterMeasure = (resultType) => {
  const resultKeys = Object.keys(resultType);
  const filteredKeys = resultKeys.filter((key) => key.includes('strMeasure'));
  const measure = [];
  filteredKeys.forEach((key) => {
    if (resultType[key]) measure.push(resultType[key]);
  });
  return measure;
};

export const filterIngredients = (resultType) => {
  const resultKeys = Object.keys(resultType);
  const filteredKeys = resultKeys.filter((key) => key.includes('strIngredient'));
  const ingredients = [];
  filteredKeys.forEach((key) => {
    if (resultType[key]) ingredients.push(resultType[key]);
  });
  return ingredients;
};

export const generateNewObj = (resultType, type) => {
  const newObj = {
    thumb: type === 'foods' ? resultType.strMealThumb : resultType.strDrinkThumb,
    title: type === 'foods' ? resultType.strMeal : resultType.strDrink,
    category: type === 'foods' ? resultType.strCategory : resultType.strAlcoholic,
    categoryDrink: type === 'drinks' ? resultType.strCategory : '',
    instructions: resultType.strInstructions,
    video: type === 'foods' ? resultType.strYoutube : null,
    ingredients: filterIngredients(resultType),
    measure: filterMeasure(resultType),
    nationality: type === 'foods' ? resultType.strArea : '',
  };
  return (newObj);
};

export const verifyId = (setBtnTitle, id) => {
  if (localStorage.getItem('inProgressRecipes')) {
    const progressIds = [];
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes.cocktails) {
      progressIds.push(Object.keys(inProgressRecipes.cocktails));
      console.log('inProgressObject: ', Object.keys(inProgressRecipes.cocktails));
    } else {
      progressIds.push(Object.keys(inProgressRecipes.meals));
    }
    const verifyProgressId = progressIds
      .some((progressId) => Number(progressId) === Number(id));
    if (verifyProgressId) return setBtnTitle('Continue Recipe');
  }
};

export const getFavorites = (id, setFavorite) => {
  if (localStorage.getItem('favoriteRecipes')) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFavorite = favoriteRecipes.some((recipe) => recipe.id === id);
    if (isFavorite) return setFavorite(blackHeartIcon);
  }
  return false;
};

export const changeFavorite = async ({ id, type }, dataItem, setFavorite, favorite) => {
  if (favorite === blackHeartIcon) return setFavorite(whiteHeartIcon);
  let favoriteExist = [];
  if (localStorage.getItem('favoriteRecipes')) {
    favoriteExist = JSON.parse(localStorage.getItem('favoriteRecipes'));
  }
  const favoriteDetails = {
    id,
    type: type === 'foods' ? 'food' : 'drink',
    nationality: dataItem.nationality,
    category: type === 'foods' ? dataItem.category : dataItem.categoryDrink,
    alcoholicOrNot: type === 'drinks' ? dataItem.category : '',
    name: dataItem.title,
    image: dataItem.thumb,
  };
  favoriteExist.push(favoriteDetails);
  await localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteExist));
  setFavorite(blackHeartIcon);
};
