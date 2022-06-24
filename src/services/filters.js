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
    instructions: resultType.strInstructions,
    video: type === 'foods' ? resultType.strYoutube : null,
    ingredients: filterIngredients(resultType),
    measure: filterMeasure(resultType),
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
