import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import mainReducer from 'src/reducers/mainReducer';

const store = createStore(
  // reducer
  mainReducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
