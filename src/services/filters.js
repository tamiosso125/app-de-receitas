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
