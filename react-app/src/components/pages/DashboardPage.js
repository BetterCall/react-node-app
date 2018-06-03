import React, { Component} from 'react';
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {allBooksSelector} from '../../reducers/books'

import AddBookCta from '../ctas/AddBookCta'

/**
 * DashboardPage
 */
const DashboardPage = ({books}) => (
  <div>
    {books.length === 0 && <AddBookCta />}

  </div>
)

DashboardPage.propTypes = {
  books : PropTypes.arrayOf(PropTypes.shape({
    title : PropTypes.string.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state) {

  return {
    books : allBooksSelector(state)
  }

}

export default connect(mapStateToProps)(DashboardPage)
