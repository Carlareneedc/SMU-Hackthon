import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <div>
        <Switch>
          <Route path="/register">
            <Register />
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
