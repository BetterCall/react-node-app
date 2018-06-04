import React, { Component} from 'react';
import PropTypes from 'prop-types'

import {Form , Button , Message , Segment , Grid , Image} from 'semantic-ui-react'
import Validator from 'validator'

import InlineError from '../messages/InlineError'

/**
 *  BookForm
 */
export class BookForm extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)

    this.state = {
     data: {
       title: this.props.book.title,
     },
     index: 0,
     loading: false,
     errors: {}
   }
  }

  componentWillReceiveProps(props) {
   this.setState({
     data: {
       title: this.props.book.title,
     }
   })
  }

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

  onChangeNumber = e =>
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });


  onSubmit = (e) => {
    e.preventDefault()
    // Validations
    const errors = this.validate(this.state.data)
    this.setState({errors})

    if (Object.keys(errors).length === 0) {

      this.setState({loading : true})
        /**
      this.props.submit(this.state.data)
      .catch(err => {
        errors.global = err.message
        //errors.email = "Can't be blank"
        //errors.password = "Can't be blank"
          this.setState({errors , loading : false})
        })
        **/

    }
  }

  validate = (data) => {
    const errors = {};
      if (!data.title) errors.title = "Can't be blank";
      if (!data.authors) errors.authors = "Can't be blank";
      if (!data.pages) errors.pages = "Can't be blank";
      return errors;
  }

  render() {

    const {data, errors ,loading} = this.state

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor="title">Book Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={data.title}
                    onChange={this.onChange}
                  />
                  {errors.title && <InlineError text={errors.title} />}
                </Form.Field >

              </Grid.Column>

            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Button primary>Save</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

BookForm.propTypes = {
  submit : PropTypes.func.isRequired,
  book : PropTypes.shape({
    title : PropTypes.string.isRequired
  }).isRequired,
}


export default BookForm;
