export default function cardPathGenerator(pathname, element) {
  if (pathname.includes('foods')) {
    return (`/foods/${element.idMeal || element.idDrink}`);
  }
  return (`/drinks/${element.idMeal || element.idDrink}`);
}
