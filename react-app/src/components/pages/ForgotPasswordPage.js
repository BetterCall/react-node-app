import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { resetPasswordRequest } from '../../actions/auth'

import { Message } from 'semantic-ui-react'
import ForgotPasswordForm from '../forms/ForgotPasswordForm'

/**
 * ForgotPasswordPage
 */
export class ForgotPasswordPage extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)
    this.state = {
      success : false ,
      loading : true
    }
  }

  submit = data => this.props.resetPasswordRequest(data)
    .then( () => this.setState({ success : true }))


  render() {
    const {success} = this.state
    return (
      <div>
        {success ? (
          <Message>Email has been sent.</Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
}

export default connect( null , {resetPasswordRequest})(ForgotPasswordPage)
