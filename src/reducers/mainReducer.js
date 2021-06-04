// == Imports

import { SAVE_PRODUCTS } from '../actions/main';

const initialState = {
  products: [],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default: return state;
  }
};

export default mainReducer;
