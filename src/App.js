import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Recipeskids from './components/componentsRecipes/Recipeskids';
import RecipesSweet from './components/componentsRecipes/RecipesSweet';
import RecipesChile from './components/componentsRecipes/RecipesChile';
import RecipesVege from './components/componentsRecipes/RecipesVege';
import RecipesGluten from './components/componentsRecipes/RecipesGluten';


function App() {
  return (
    <Router>
    <div>
        <Switch>
          <Route path="/kids">
            <Recipeskids />
          </Route>
          <Route path="/Sweet">
            <RecipesSweet />
          </Route>
          <Route path="/Chilenas">
            <RecipesChile />
          </Route>
          <Route path="/Vegetariana">
            <RecipesVege />
          </Route>
          <Route path="/Gluten">
            <RecipesGluten />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </div>
</Router>    
  );
}

export default App;
