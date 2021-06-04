/* eslint-disable camelcase */

// == Import npm

import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './product.scss';
import clock from '../../../assets/images/clock.svg';
import smile from '../../../assets/images/smile.svg';
import players from '../../../assets/images/players.svg';
import QuantitySelect from '../../QuantitySelect';
import Button from '../../Button';

// == Component

const Product = ({
  product_img,
  product_name,
  product_time,
  product_age_min,
  product_age_max,
  product_player_min,
  product_player_max,
  product_price,
  product_short_desc,
}) => (
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
          <span className="productPrice">{product_price} €</span>
        </div>
        <div className="productShortDesc">
          <p className="description">{product_short_desc}</p>
          <div className="addToCart">
            <form className="addToCartForm">
              <QuantitySelect maxQuantity="10" selectValue="3" />
              <Button label="Ajouter au panier" colorCode="#419641" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == PropTypes

Product.propTypes = {
  product_img: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  product_time: PropTypes.number.isRequired,
  product_age_min: PropTypes.number.isRequired,
  product_age_max: PropTypes.number.isRequired,
  product_player_min: PropTypes.number.isRequired,
  product_player_max: PropTypes.number.isRequired,
  product_price: PropTypes.number.isRequired,
  product_short_desc: PropTypes.string.isRequired,
};

// == Export
export default Product;
