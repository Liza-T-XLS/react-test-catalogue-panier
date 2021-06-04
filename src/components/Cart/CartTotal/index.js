// == Imports npm

import React from 'react';
import Button from '../../Button';

import PropTypes from 'prop-types';

// == Imports

import './cartTotal.scss';

// == Component

const CartTotal = ({ cart }) => {
  const totalPriceArray = cart.map((product) => product.totalPrice);
  console.log(totalPriceArray);
  const cartTotalPrice = totalPriceArray.reduce((a, b) => a + b, 0);
  return (
    <div className="cartTotal">
      <div className="cartTotalPrice">
        <span>TOTAL :&nbsp;</span><span>{cartTotalPrice}&nbsp;€</span>
      </div>
      <Button label="Valider le panier" colorCode="#17A2B8" />
    </div>
  );
};

// == PropTypes

CartTotal.propTypes = {
  cart: PropTypes.array.isRequired,
};

// == Export

export default CartTotal;
