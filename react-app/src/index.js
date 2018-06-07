import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom'
// redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import decode from 'jwt-decode'

import { composeWithDevTools } from 'redux-devtools-extension';


import 'semantic-ui-css/semantic.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './rootReducer'
import {userLoggedIn} from './actions/auth'

// create store
const store = createStore(
  rootReducer ,
  composeWithDevTools(applyMiddleware(thunk))
)

// check if user is already authenticated
if(localStorage.bookwormJWT) {
  const payload = decode(localStorage.bookwormJWT)
  const user = {
    token : localStorage.bookwormJWT,
    email : payload.email ,
    confirmed : payload.confirmed,
  }
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>

    </BrowserRouter>,
    document.getElementById('root')

);
registerServiceWorker();
