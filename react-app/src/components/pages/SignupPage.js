import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import { signup } from '../../actions/users'

import SignupForm from '../forms/SignupForm'

/**
 * SignupPage

 */
export class SignupPage extends Component { // eslint-disable-line react/prefer-stateless-function

  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));


  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    )
  }
}

SignupPage.propTypes = {
  history : PropTypes.shape({
    push : PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
}

export default connect(null , { signup } ) (SignupPage)
