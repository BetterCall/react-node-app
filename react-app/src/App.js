import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import {Route} from 'react-router'

import AuthRoute from './components/routes/AuthRoute'
import GuestRoute from './components/routes/GuestRoute'

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import ConfirmationPage from './components/pages/ConfirmationPage'
import DashboardPage from './components/pages/DashboardPage'

import NewBookPage from './components/pages/NewBookPage'

import TopNavigation from './components/navigation/TopNavigation'


const App = ({location , isAuthenticated}) => (

  <div className="ui container" style={{backgroundColor : '#fff'}}>

    { isAuthenticated && <TopNavigation /> }
    <Route
      location={location}
      exact
      path="/"
      component={ HomePage }
    />
    <Route
      location={location}
      exact
      path="/confirmation/:token"
      component={ ConfirmationPage }
    />

    <GuestRoute
      location={location}
      exact
      path="/login"
      component={ LoginPage }
    />

    <GuestRoute
      location={location}
      exact
      path="/signup"
      component={ SignupPage }
    />
    <AuthRoute
      location={location}
      exact
      path="/dashboard"
      component={ DashboardPage }
    />
    <AuthRoute
      location={location}
      exact
      path="/books/new"
      component={ NewBookPage }
    />

  </div>
)

App.propTypes = {
  location : PropTypes.shape({
    pathname : PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated : PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated : !!state.user.token
  }
}


export default connect(mapStateToProps)(App);
