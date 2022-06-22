import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
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
import MainDetails from './pages/MainDetails';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (<Login />) } />
          <Route path="/foods/:id" render={ () => (<MainDetails />) } />
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
          <Route path="/drinks/:id" render={ () => (<MainDetails />) } />
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
