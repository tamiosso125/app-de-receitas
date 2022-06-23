import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Explore from './pages/Explore';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipesProvider from './context/RecipesProvider';
import DetailsFoods from './pages/DetailsFoods';
import DetailsDrinks from './pages/DetailsDrinks';
import ExploreDrinksFoods from './pages/ExploreDrinksFoods';
import NotFound from './pages/NotFound';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (<Login />) } />
          <Route path="/foods/:id" render={ () => (<DetailsFoods />) } />
          <Route
            exact
            path="/foods"
            render={ (props) => (<MainPage { ...props } />) }
          />
          <Route
            exact
            path="/drinks"
            render={ (props) => (<MainPage { ...props } />) }
          />
          <Route path="/drinks/:id" render={ () => (<DetailsDrinks />) } />
          <Route
            exact
            path="/explore"
            render={ (props) => (<Explore { ...props } />) }
          />
          <Route
            exact
            path="/explore/foods"
            render={ (props) => (<ExploreDrinksFoods { ...props } />) }
          />
          <Route
            exact
            path="/explore/drinks"
            render={ (props) => (<ExploreDrinksFoods { ...props } />) }
          />
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
          <Route
            exact
            path="/profile"
            render={ (props) => (<Profile { ...props } />) }
          />
          <Route exact path="/done-recipes" render={ () => (<DoneRecipes />) } />
          <Route exact path="/favorite-recipes" render={ () => (<FavoriteRecipes />) } />
          <Route path="*" render={ () => (<NotFound />) } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
