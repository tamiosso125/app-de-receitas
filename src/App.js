import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Explore from './pages/Explore';
import ExploreFoodsNationalities from './pages/ExploreNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipesProvider from './context/RecipesProvider';
import ExploreDrinksFoods from './pages/ExploreDrinksFoods';
import NotFound from './pages/NotFound';
import ExploreIngredients from './pages/ExploreIngredients';
import MainDetails from './pages/MainDetails';
import InProgress from './pages/InProgress';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (<Login />) } />
          <Route exact path="/foods" render={ () => (<MainPage />) } />
          <Route exact path="/drinks" render={ () => (<MainPage />) } />
          <Route exact path="/explore" render={ () => (<Explore />) } />
          <Route path="/foods/:id" render={ () => (<MainDetails />) } />
          <Route path="/drinks/:id" render={ () => (<MainDetails />) } />
          <Route
            exact
            path="/explore/foods"
            render={ () => (<ExploreDrinksFoods />) }
          />
          <Route
            exact
            path="/explore/drinks"
            render={ () => (<ExploreDrinksFoods />) }
          />
          <Route exact path="/explore" render={ () => (<Explore />) } />
          <Route
            exact
            path="/explore/foods/ingredients"
            render={ () => (<ExploreIngredients />) }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            render={ () => (<ExploreIngredients />) }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            render={ () => (<ExploreFoodsNationalities />) }
          />
          <Route exact path="/profile" render={ () => (<Profile />) } />
          <Route exact path="/done-recipes" render={ () => (<DoneRecipes />) } />
          <Route exact path="/favorite-recipes" render={ () => (<FavoriteRecipes />) } />
          <Route exact path="/foods/:id/in-progress" render={ () => (<InProgress />) } />
          <Route exact path="/drinks/:id/in-progress" render={ () => (<InProgress />) } />
          <Route path="*" render={ () => (<NotFound />) } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
