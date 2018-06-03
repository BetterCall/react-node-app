import React, { Component, PropTypes } from 'react';

import {Segment} from 'semantic-ui-react'

import SearchBookForm from '../forms/SearchBookForm'
import BookForm from '../forms/BookForm'

/**
 * NewBookPage
 */
export class NewBookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book : null
    }
  }

  onBookSelect = book => {
    console.log("onBookSelect " )
    console.log(book)
    this.setState({book : book})
  }

  addBook = () => console.log("addbook")

  render() {
    return (
      <Segment>
        <h1>add new book to your collection</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />

        {this.state.book && (
           <BookForm submit={this.addBook} book={this.state.book} />
         )}

      </Segment>
    );
  }
}
/*
NewBookPage.propTypes = {
  book: PropTypes.type.isRequired
}
*/
export default NewBookPage;
