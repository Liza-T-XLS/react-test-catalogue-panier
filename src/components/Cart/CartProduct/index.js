/* eslint-disable no-plusplus */

// == Import npm

import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';

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
  const onChangeHandler = (e) => {
    updateProductQuantity(
      productId,
      e.target.value,
    );
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    removeProductFromCart(productId);
  };

  const arr = [];
  const maxQuantity = 10;
  for (let quantity = 1; quantity <= maxQuantity; quantity++) {
    arr.push(quantity);
  }
  return (
    <tr key={productId} className="cartTableRow">
      <td><img className="productImage" src={productImg} alt="productImage" /></td>
      <td>{productName}</td>
      <td>
        <select className="productQuantity" value={productQuantity} onChange={onChangeHandler}>{
          arr.map((arrRow) => (
            <option key={arrRow} value={arrRow}>{arrRow}</option>
          ))
        };
        </select>
      </td>
      <td>{productPrice}</td>
      <td className="totalPrice">{totalPrice} €</td>
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
