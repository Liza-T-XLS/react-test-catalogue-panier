/* eslint-disable no-plusplus */

// == Imports npm

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Imports

import classNames from 'classnames';
import Button from '../../Button';
import { priceRounderWithComma } from '../../../utils';

// == Component

const CartProduct = ({
  productId,
  productImg,
  productName,
  productQuantity,
  productPrice,
  totalPrice,
  updateProductQuantity,
  removeProductFromCart,
}) => {
  const [productIsInCart, setProductIsInCart] = useState(true);

  const cartTableRowClassName = classNames('cartTableRow', { removed: !productIsInCart });

  const onChangeHandler = (e) => {
    updateProductQuantity(
      productId,
      e.target.value,
    );
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setProductIsInCart(false);
    setTimeout(() => {
      removeProductFromCart(productId);
    }, 500);
  };

  // array created in order to automatically generate options in productQuantity select
  // (number of elements in array will equal number of options)
  const arr = [];
  const maxQuantity = 10;
  for (let quantity = 1; quantity <= maxQuantity; quantity++) {
    arr.push(quantity);
  }

  return (
    <tr key={productId} className={cartTableRowClassName}>
      <td><img className="productImage" src={productImg} alt="productImage" /></td>
      <td className="productName"><Link to="/" title="catalog">{productName}</Link></td>
      <td>
        <label htmlFor="productQuantityCart">
          <select id="productQuantityCart" className="productQuantity" value={productQuantity} onChange={onChangeHandler}>{
            arr.map((arrRow) => (
              <option key={arrRow} value={arrRow}>{arrRow}</option>
            ))
          };
          </select>
        </label>
      </td>
      <td className="productPrice">{priceRounderWithComma(productPrice)}&nbsp;€</td>
      <td className="totalPrice">{priceRounderWithComma(totalPrice)}&nbsp;€</td>
      <td><form onSubmit={onSubmitHandler}><Button label="retirer" colorCode="#C30202" /></form></td>
    </tr>
  );
};

// == PropTypes

CartProduct.propTypes = {
  productId: PropTypes.number.isRequired,
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired,
  productPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  updateProductQuantity: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

// == Export

export default CartProduct;
