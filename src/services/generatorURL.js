function generatorURL(pathname) {
  const urlDefaultData = [
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  ];
  if (pathname === '/drinks') {
    return (urlDefaultData[0]);
  }
  return (urlDefaultData[1]);
}

export default generatorURL;
