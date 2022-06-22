function titleGenerator(pathname) {
  const titleList = ['Foods', 'Drinks', 'Explore', 'Ingredients', 'Nationalities',
    'Profile', 'Recipes', 'Done', 'Favorite'];

  switch (pathname) {
  case '/foods':
    return titleList[0];
  case '/drinks':
    return titleList[1];
  case '/explore':
    return titleList[2];
  case '/explore/foods':
    return `${titleList[2]} ${titleList[0]}`;
  case '/explore/drinks':
    return `${titleList[2]} ${titleList[1]}`;
  case '/explore/drinks/ingredients' || '/explore/foods/ingredients':
    return `${titleList[2]} ${titleList[3]}`;
  case '/explore/drinks/nationalities' || '/explore/foods/nationalities':
    return `${titleList[2]} ${titleList[4]}`;
  case '/profile':
    return titleList[5];
  case '/done-recipes':
    return `${titleList[7]} ${titleList[6]}`;
  case '/favorite-recipes':
    return `${titleList[8]} ${titleList[6]}`;
  default:
    break;
  }
}

export default titleGenerator;
