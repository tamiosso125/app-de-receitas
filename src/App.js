import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Foods from './pages/Foods';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/foods" render={ () => (<Foods />) } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
