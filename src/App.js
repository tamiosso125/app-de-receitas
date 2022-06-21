import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipesProvider from './context/RecipesProvider';
import DetailsFoods from './pages/DetailsFoods';
import DetailsDrinks from './pages/DetailsDrinks';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (<Login />) } />
          <Route exact path="/foods" render={ (props) => (<Foods { ...props } />) } />
          <Route path="/foods/:id" render={ () => (<DetailsFoods />) } />
          <Route
            exact
            path="/drinks"
            render={ (props) => (<Drinks { ...props } />) }
          />
          <Route path="/drinks/:id" render={ () => (<DetailsDrinks />) } />
          <Route exact path="/explore" render={ () => (<Explore />) } />
          <Route exact path="/explore/foods" render={ () => (<ExploreFoods />) } />
          <Route exact path="/explore/drinks" render={ () => (<ExploreDrinks />) } />
          <Route
            exact
            path="/explore/foods/ingredients"
            render={ () => (<ExploreFoodsIngredients />) }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            render={ () => (<ExploreDrinksIngredients />) }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            render={ () => (<ExploreFoodsNationalities />) }
          />
          <Route exact path="/profile" render={ () => (<Profile />) } />
          <Route exact path="/done-recipes" render={ () => (<DoneRecipes />) } />
          <Route exact path="/favorite-recipes" render={ () => (<FavoriteRecipes />) } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
