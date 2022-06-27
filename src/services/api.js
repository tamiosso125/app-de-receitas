const fetchDetailsApi = async (id, type) => {
  const ApiUrls = {
    urlFoods: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    urlDrinks: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  };
  const { urlFoods, urlDrinks } = ApiUrls;
  const url = type === 'foods' ? urlFoods : urlDrinks;
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

export default fetchDetailsApi;
