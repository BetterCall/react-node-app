import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { loginWithGoogle } from '../../actions/auth'

import InstagramLogin from 'react-instagram-login'

import { Button, Icon, Label } from 'semantic-ui-react'
/**
 * GoogleLoginButton
 */
export class InstagramLoginButton extends Component { // eslint-disable-line react/prefer-stateless-function

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
    console.log('instagram access')
  console.log(response);
  }

  render() {

    let fbContent;

    return (
      <div>

        <InstagramLogin
          clientId="d3a872612be54fec9231d181d68035b6"
          buttonText="Login"
          onSuccess={this.response}
          onFailure={this.response}
        />

      </div>
    );
  }
}


export default ( InstagramLoginButton )
