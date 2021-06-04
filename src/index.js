// == Import : npm
import React from 'react';
import { Provider } from 'react-redux';
import store from 'src/store';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local

// Components
import App from 'src/components/App';

// == Render

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
