/**
 * Created by Bryann on 05/05/2018.
 */

 import React, { Component } from 'react';
 import PropTypes from 'prop-types'
 import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import { login } from '../../actions/auth'

import LoginForm from '../forms/LoginForm'
import FacebookLoginButton from '../loginButtons/FacebookLoginButton'
import InstagramLoginButton from '../loginButtons/InstagramLoginButton'

 /**
  * LoginPage
  */
class LoginPage extends Component {

  submit = (data) =>
    this.props.login(data)
      .then( () => this.props.history.push('/dashboard'))

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <FacebookLoginButton />
        <InstagramLoginButton />


        <Link to="/">Home</Link>
        <LoginForm submit={this.submit}/>
        <Link to="/forgot_password">Forgot password</Link>
      </div>
    )

  }

}


LoginPage.propTypes = {
  history : PropTypes.shape({
    push : PropTypes.func.isRequired
  }).isRequired
}


 export default connect(null, { login })(LoginPage)
