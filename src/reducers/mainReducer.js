// == Imports

import { SAVE_PRODUCTS, SAVE_PRODUCT_TO_CART } from '../actions/main';

const initialState = {
  products: [],
  cart: [],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SAVE_PRODUCT_TO_CART: {
      const newCartArray = [
        ...state.cart,
        {
          productId: action.productId,
          productImg: action.productImg,
          productName: action.productName,
          productQuantity: action.productQuantity,
          productPrice: action.productPrice,
          totalPrice: action.productQuantity * action.productPrice,
        },
      ];
      return {
        ...state,
        cart: newCartArray,
      };
    }
    default: return state;
  }
};

export default mainReducer;
