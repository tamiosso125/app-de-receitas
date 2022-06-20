import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import RecipesProvider from './context/Provider';

function App() {
  return (
    <RecipesProvider>
      <Route path="/foods" component={ Search } />
    </RecipesProvider>
  );
}

export default App;
