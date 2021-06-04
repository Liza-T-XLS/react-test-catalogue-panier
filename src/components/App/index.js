// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './app.scss';
import Header from '../Header';
import Catalog from '../../containers/Catalog';
import Cart from '../../containers/Cart';

// == Component
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route
        path="/"
        exact
      >
        <Catalog />
      </Route>
      <Route
        path="/cart"
        exact
      >
        <Cart />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
