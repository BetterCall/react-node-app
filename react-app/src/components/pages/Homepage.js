/**
 * Created by Bryann on 05/05/2018.
 */

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {logout} from '../../actions/auth'


import {Button} from 'semantic-ui-react'

 /**
  * HomePage
  */
const HomePage  = ({isAuthenticated , logout}) => (
  <div>
    <h1>hOME PAGE</h1>
    {isAuthenticated ? <Button onClick={() => logout()} inverted color='red'>Log out</Button> : <Link to="/login">Login</Link>  }
  </div>
)

HomePage.propTypes = {
  isAuthenticated : PropTypes.bool.isRequired,
  logout          : PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated : !!state.user.uid
  }
}

 export default connect(mapStateToProps , {logout})(HomePage)
