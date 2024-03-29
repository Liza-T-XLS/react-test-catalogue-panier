/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable no-else-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */

// == Imports

import {
  SAVE_PRODUCTS,
  SAVE_PRODUCT_TO_CART,
  UPDATE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from '../actions/main';

// == Initial state

const initialState = {
  products: [],
  cart: [],
};

// == Reducer

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SAVE_PRODUCT_TO_CART: {
      const isProductInCart = state.cart.find((product) => product.productId === action.productId);
      if (!isProductInCart) {
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
      } else {
        const newCartArray = [...state.cart].map((product) =>
          product.productId === action.productId ? {
            ...product,
            productQuantity: action.productQuantity,
            totalPrice: action.productQuantity * action.productPrice,
          } : product);
        return {
          ...state,
          cart: newCartArray,
        };
      };
    }
    case UPDATE_PRODUCT_QUANTITY: {
      const updatedNewCartArray = [...state.cart].map((product) =>
        product.productId === action.productId ? {
          ...product,
          productQuantity: action.productQuantity,
          totalPrice: action.productQuantity * product.productPrice,
        } : product);
      return {
        ...state,
        cart: updatedNewCartArray,
      };
    }
    case REMOVE_PRODUCT_FROM_CART:
      const newCartArray = [...state.cart.filter((product) => product.productId !== action.productId)];
      return {
        ...state,
        cart: newCartArray,
      };
    default: return state;
  }
};

// == Export

export default mainReducer;
