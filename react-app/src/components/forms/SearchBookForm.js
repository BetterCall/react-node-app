import React, { Component } from 'react';
import PropTypes from 'prop-types'

//import Api from '../../api/Api'

import {Form , Dropdown} from 'semantic-ui-react'

/**
 * SearchBookForm
 */
export class SearchBookForm extends Component {
  state = {
    query : '',
    loading : false ,
    options : [
      {
        key :1 ,
        value : 1 ,
        text : 'first book '
      },
      {
        key :2 ,
        value : 2 ,
        text : 'second book '
      }
    ],
    books : {}
  }

  onSearchChange = (e , { searchQuery }) => {
    clearTimeout(this.timer)
    this.setState({
      query : searchQuery
    })

    this.time = setTimeout(this.fetchOptions, 1000)
  }

  fetchOptions = () => {
    console.log(this.state.query)
    // if query is empty
    if(!this.state.query){
      this.setState({loading: false})
      return
    }
    // set loading state to true
    this.setState({loading: true})
/**
    Api.BookApi.fetchBookByName(this.state.query)
      .then(books => {
        const options = []
        const booksHash = {}
        books.forEach(book => {
          booksHash[book.key] = book
          options.push({
            key : book.key,
            value : book.key,
            text : book.title,
          })
        })

        console.log(booksHash)

        this.setState({
          loading : false ,
          options : options ,
          books : booksHash
        })
      })
      **/


  }

  onChange = (e, data) => {
    this.setState({query : data.value})
    this.props.onBookSelect(this.state.books[data.value])
  }


  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder='Search book'
          value= {this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

SearchBookForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired
}


export default (SearchBookForm)
