import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom'
// redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';


import 'semantic-ui-css/semantic.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './rootReducer'
import {loginSuccess} from './actions/auth'

// create store
const store = createStore(
  rootReducer ,
  composeWithDevTools(applyMiddleware(thunk))
)

// check if user is already authenticated
if(localStorage.appUserUID) {
  const user = { uid : localStorage.appUserUID}
  store.dispatch(loginSuccess(user))
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
