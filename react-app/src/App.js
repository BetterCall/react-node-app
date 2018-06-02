import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import HomePage  from './components/pages/Homepage'
import LoginPage from './components/pages/LoginPage'

const App = () =>
  <div>
    <Route path='/' exact component={HomePage}/>
    <Route path='/login' exact component={LoginPage}/>
  </div>

export default App;
