// == Import npm
import React from 'react';

// == Import
import './product.scss';
import boardGame from '../../../assets/images/boardGame.svg';
import clock from '../../../assets/images/clock.svg';
import smile from '../../../assets/images/smile.svg';
import players from '../../../assets/images/players.svg';
import QuantitySelect from '../../QuantitySelect';
import Button from '../../Button';

// == Component
const Product = () => (
  <div className="product">
    <img className="productImage" src={boardGame} alt="productImage" />
    <div className="productDetails">
      <h2 className="productName">Product Name</h2>
      <div className="productSummary">
        <div className="productOverview">
          <ul className="productSpecificationsList">
            <li className="productSpecification"><img className="specificationIcon" src={clock} alt="" /><span className="specificationLabel">A partir de X min</span></li>
            <li className="productSpecification"><img className="specificationIcon" src={smile} alt="" /><span className="specificationLabel">De X à X ans</span></li>
            <li className="productSpecification"><img className="specificationIcon" src={players} alt="" /><span className="specificationLabel">Entre X et X joueurs</span></li>
          </ul>
          <span className="productPrice">XXX,XX €</span>
        </div>
        <div className="productShortDesc">
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Pretium viverra suspendisse potenti nullam ac tortor. Vitae purus adeas pulvinar sape.</p>
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

// == Export
export default Product;
