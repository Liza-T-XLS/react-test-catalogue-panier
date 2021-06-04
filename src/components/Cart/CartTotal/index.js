// == Imports npm

import React from 'react';
import Button from '../../Button';

// == Imports

import './cartTotal.scss';

// == Component

const CartTotal = () => (
  <div className="cartTotal">
    <div className="cartTotalPrice">
      <span>TOTAL :&nbsp;</span><span>XXX,XX €</span>
    </div>
    <Button label="Valider le panier" colorCode="#17A2B8" />
  </div>
);

// == Export

export default CartTotal;
