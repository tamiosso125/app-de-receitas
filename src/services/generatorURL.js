export function generatorURL(pathname) {
  const urlDefaultData = [
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  ];
  if (pathname === '/drinks') {
    return (urlDefaultData[0]);
  }
  return (urlDefaultData[1]);
}

export function generatorURLCategory(pathname) {
  const categoryList = [
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  ];
  if (pathname === '/drinks') {
    return categoryList[1];
  }
  return categoryList[0];
}
