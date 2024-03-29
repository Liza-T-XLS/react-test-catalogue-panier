/* eslint-disable no-plusplus */

// == Import npm

import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './cart.scss';
import CartProduct from '../../containers/Cart/CartProduct';
import CartTotal from './CartTotal';

// == Component

const Cart = ({ cart }) => (
  <div className="cart">
    <h1 className="title">Récapitulatif du panier</h1>
    <div className="cartDetails">
      <table className="cartTable">
        <tbody>
          <tr className="cartTableHeader" id="cartTableHeader">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Quantité</td>
            <td>Prix unitaire</td>
            <td>Prix total</td>
            <td>&nbsp;</td>
          </tr>
          {cart.map((product) => (
            <CartProduct key={product.productId} {...product} />
          ))}
        </tbody>
      </table>
      <CartTotal cart={cart} />
    </div>
  </div>
);

// PropTypes

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

// == Export

export default Cart;
