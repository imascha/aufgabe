import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'

import './index.css';
import Home from './Home';
import ProductPage from './ProductPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);