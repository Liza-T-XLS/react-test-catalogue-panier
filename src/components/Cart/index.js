// == Import npm

import React from 'react';

// == Import

import './cart.scss';
import boardGame from '../../assets/images/boardGame.svg';
import QuantitySelect from '../QuantitySelect';
import Button from '../Button';

// == Component

const cart = () => (
  <div className="cart">
    <h1 className="title">Récapitulatif du panier</h1>
    <table className="cartTable">
      <tbody>
        <tr className="cartTableHeader">
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>Quantité</td>
          <td>Prix unitaire</td>
          <td>Prix total</td>
          <td>&nbsp;</td>
        </tr>
        <tr className="cartTableRow">
          <td><img className="productImage" src={boardGame} alt="productImage" /></td>
          <td>Product Name</td>
          <td><QuantitySelect maxQuantity="10" /></td>
          <td>XXX,XX €</td>
          <td className="totalPrice">XXX,XX €</td>
          <td><Button label="retirer" colorCode="#C30202" /></td>
        </tr>
      </tbody>
    </table>
  </div>
);

// == Export

export default cart;
