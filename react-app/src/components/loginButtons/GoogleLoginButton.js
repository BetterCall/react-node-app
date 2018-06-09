import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { loginWithGoogle } from '../../actions/auth'


import { Button, Icon, Label } from 'semantic-ui-react'
/**
 * GoogleLoginButton
 */
export class GoogleLoginButton extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)

    this.state = {
      loading : false
    }
  }

  handleClick = () => {
    this.setState({loading : true})

    this.props.loginWithGoogle()

  }

  render() {
    return (
      <div>

        <Button color='google plus' onClick={this.handleClick}>
          <Icon name='google plus' /> Google Plus
        </Button>

      </div>
    );
  }
}

GoogleLoginButton.propTypes = {
  loginWithGoogle: PropTypes.func.isRequired
}

export default connect( null, { loginWithGoogle } ) ( GoogleLoginButton )
