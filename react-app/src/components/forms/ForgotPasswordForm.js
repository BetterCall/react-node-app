import React, { Component} from 'react';
import PropTypes from 'prop-types'

import {Form , Button , Message} from 'semantic-ui-react'
import Validator from 'validator'

import InlineError from '../messages/InlineError'

/**
 *  LoginForm
 *
 *  props : submit : submit function
 *
 *
 */
class ForgotPasswordForm extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    data : {
      email : '' ,
    } ,
    loading : false ,
    errors : {}
  }

  /**
  * onChange()
  *
  *
  **/
  onChange = e => {
    this.setState(
      {
        data : {
          ...this.state.data ,
          [e.target.name] : e.target.value
        }
      }
    )
  }

  /**
  * onSubmit()
  *   set loading state to true
  *   validate data
  *   if errors is empty execute props : submit()
  *
  **/
  onSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({errors})

    if (Object.keys(errors).length === 0) {

      this.setState({loading : true})

      this.props
        .submit(this.state.data)
        .catch(err => this.setState({
            errors : err.response.data.errors ,
            loading : false
          })
        )

    }
  }

  /**
  * validate()
  *
  **/
  validate = (data) => {
    const errors = {}

    if (!data.email) errors.email = "Can't be blank"
    if(!Validator.isEmail(data.email)) errors.email = "Invalid Email"

    return errors
  }

  render() {

    const {data, errors ,loading} = this.state

    return (
      <Form
        onSubmit={this.onSubmit}
        loading={loading}
      >

        {!!errors.global &&
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        }

        <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Exemple@exemple.com"
              value={data.email}
              onChange={this.onChange}
            />
          {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>

        <Button primary>Login</Button>
      </Form>
    )
  }
}

ForgotPasswordForm.propTypes = {
  submit : PropTypes.func.isRequired
}

export default ForgotPasswordForm;
