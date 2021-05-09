import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {ReactReduxFirebaseProvider } from 'react-redux-firebase';
import {BrowserRouter} from "react-router-dom";

import store, {rrfProps} from './Redux/firestore'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <ReactReduxFirebaseProvider {...rrfProps}>
                  <App />
              </ReactReduxFirebaseProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
