// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Header from '../Header';
import Catalog from '../Catalog';

// == Component
const App = () => (
  <div className="app">
    <Header />
    <Catalog />
  </div>
);

// == Export
export default App;
