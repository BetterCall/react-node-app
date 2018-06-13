import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { loginWithGoogle } from '../../actions/auth'

import GoogleLogin from 'react-google-login';

import { Button, Icon, Label } from 'semantic-ui-react'
/**
 * GoogleLoginButton
 */
export class GoogleLoginButton extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)

    this.state = {
      userId :'' ,
      name :'' ,
      email :''
    }
  }

  handleClick = () => {
    this.setState({loading : true})


  }

  response = (response) => {
    console.log('Google access')
    console.log(response);
  }

  render() {

    return (
      <div>

        <GoogleLogin
          clientId="511040705587-tst0p9rnfrqe96saec8d0ql5n0fpcvpu.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.response}
          onFailure={this.response}
        />

      </div>
    );
  }
}


export default ( GoogleLoginButton )
