// == Import npm
import React from 'react';

// == Import
import './catalog.scss';
import Product from './Product';

// == Component
const Catalog = () => (
  <div className="catalog">
    <h1 className="title">Catalogue de jeux de société</h1>
    <Product />
  </div>
);

// == Export
export default Catalog;
