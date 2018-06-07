import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { validateToken, resetPassword } from '../../actions/auth'

import { Message } from 'semantic-ui-react'
import ResetPasswordForm from '../forms/ResetPasswordForm'


/**
 * ResetPasswordPage
 */
export class ResetPasswordPage extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)

    this.state = {
      loading : true,
      success : false,
    }
  }

  componentDidMount() {
    this.props.validateToken(this.props.match.params.token)
      .then(() => this.setState({loading : false , success : true}))
      .catch(() => this.setState({loading : false , success : false }))
  }


  submit = data => this.props.resetPassword(data)
    .then( () => this.props.history.push('/login') )

  render() {

    const { loading , success } = this.state
    const { token } = this.props.match.params

    return (
      <div>
        { loading &&  <Message>loading</Message> }
        { !loading && success && <ResetPasswordForm submit={this.submit} token={token}/> }
        { !loading && !success && <Message>Invalid Token</Message> }

      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  validateToken : PropTypes.func.isRequired ,
  resetPassword : PropTypes.func.isRequired ,
  history : PropTypes.shape({
    push : PropTypes.func.isRequired
  }).isRequired ,
  match: PropTypes.shape({
    params : PropTypes.shape({
      token : PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default connect(null , { validateToken, resetPassword })(ResetPasswordPage)
