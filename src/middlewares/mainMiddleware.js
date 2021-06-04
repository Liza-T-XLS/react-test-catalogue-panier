// == Imports

import axios from 'axios';

import { LOAD_PRODUCTS, saveProducts } from '../actions/main';

// == Middleware

const mainMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
      })
        .then((response) => {
          store.dispatch(saveProducts(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

// == Export

export default mainMiddleware;
