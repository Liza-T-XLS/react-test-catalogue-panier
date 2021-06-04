// == Imports

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainReducer from 'src/reducers/mainReducer';

import mainMiddleware from '../middlewares/mainMiddleware';

// == Components

const enhancers = composeWithDevTools(
  applyMiddleware(
    mainMiddleware,
    // ... other middlewares
  ),
);

const store = createStore(
  // reducers
  mainReducer,
  // enhancers
  enhancers,
);

// == Export

export default store;
