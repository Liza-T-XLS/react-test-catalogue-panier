/* eslint-disable no-plusplus */
/* eslint-disable camelcase */

// == Import npm

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// == Import

import './product.scss';
import clock from '../../../assets/images/clock.svg';
import smile from '../../../assets/images/smile.svg';
import players from '../../../assets/images/players.svg';
import Button from '../../Button';
import { priceRounderWithComma } from '../../../utils';

// == Component

const Product = ({
  product_id,
  product_img,
  product_name,
  product_time,
  product_age_min,
  product_age_max,
  product_player_min,
  product_player_max,
  product_price,
  product_short_desc,
  saveProductToCart,
  cart,
}) => {
  const isProductInCart = cart.find((product) => product.productId === product_id);
  let productQuantity = 1;
  if (isProductInCart) {
    productQuantity = isProductInCart.productQuantity;
  }
  const [selectValue, setSelectValue] = useState(productQuantity);

  const onChangeHandler = (e) => {
    setSelectValue(e.target.value);
  };

  // array created in order to automatically generate options in productQuantity select
  // (number of elements in array will equal number of options)
  const arr = [];
  const maxQuantity = 10;
  for (let quantity = 1; quantity <= maxQuantity; quantity++) {
    arr.push(quantity);
  }

  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    saveProductToCart(product_id, product_img, product_name, selectValue, product_price);
    history.push('/cart');
  };

  return (
    <div className="product">
      <img className="productImage" src={product_img} alt="productImage" />
      <div className="productDetails">
        <h2 className="productName">{product_name}</h2>
        <div className="productSummary">
          <div className="productOverview">
            <ul className="productSpecificationsList">
              <li className="productSpecification"><img className="specificationIcon" src={clock} alt="" /><span className="specificationLabel">A partir de {product_time} min</span></li>
              <li className="productSpecification"><img className="specificationIcon" src={smile} alt="" /><span className="specificationLabel">De {product_age_min} à {product_age_max} ans</span></li>
              <li className="productSpecification"><img className="specificationIcon" src={players} alt="" /><span className="specificationLabel">Entre {product_player_min} et {product_player_max} joueurs</span></li>
            </ul>
            <span className="productPrice">{priceRounderWithComma(product_price)} €</span>
          </div>
          <div className="productShortDesc">
            <p className="description">{product_short_desc}</p>
            <div className="addToCart">
              <form className="addToCartForm" action="/cart" onSubmit={onSubmitHandler}>
                <label htmlFor="productQuantityCatalog">
                  <select id="productQuantityCatalog" className="productQuantity" value={selectValue} onChange={onChangeHandler}>{
                    arr.map((arrRow) => (
                      <option key={arrRow} value={arrRow}>{arrRow}</option>
                    ))
                  };
                  </select>
                </label>
                <Button label="Ajouter au panier" colorCode="#419641" buttonType="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// == PropTypes

Product.propTypes = {
  product_id: PropTypes.number.isRequired,
  product_img: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  product_time: PropTypes.number.isRequired,
  product_age_min: PropTypes.number.isRequired,
  product_age_max: PropTypes.number.isRequired,
  product_player_min: PropTypes.number.isRequired,
  product_player_max: PropTypes.number.isRequired,
  product_price: PropTypes.number.isRequired,
  product_short_desc: PropTypes.string.isRequired,
  saveProductToCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

// == Export

export default Product;
