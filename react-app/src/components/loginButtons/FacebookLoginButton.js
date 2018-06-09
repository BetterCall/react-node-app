import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { loginWithGoogle } from '../../actions/auth'

import FacebookLogin from 'react-facebook-login'

import { Button, Icon, Label } from 'semantic-ui-react'
/**
 * GoogleLoginButton
 */
export class FacebookLoginButton extends Component { // eslint-disable-line react/prefer-stateless-function

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

  responseFacebook = (response) => {
  console.log(response);
  }

  render() {

    let fbContent;

    return (
      <div>

        <FacebookLogin
          appId="199091450715612"
          autoLoad
          callback={this.responseFacebook}
          render={renderProps => (
            <Button color='facebook' onClick={this.handleClick}>
              <Icon name='facebook' /> Facebook
            </Button>
          )}
        />

      </div>
    );
  }
}


export default ( FacebookLoginButton )
