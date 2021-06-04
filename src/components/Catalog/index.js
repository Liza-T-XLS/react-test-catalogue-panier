// == Imports npm

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Imports

import './catalog.scss';
import Product from '../../containers/Catalog/Product';

// == Component

const Catalog = ({ loadProducts, products }) => {
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="catalog">
      <h1 className="title">Catalogue de jeux de société</h1>
      {products.map((product) => (
        <Product key={product.product_id} {...product} />
      ))}
    </div>
  );
};

// PropTypes

Catalog.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

// == Export

export default Catalog;
