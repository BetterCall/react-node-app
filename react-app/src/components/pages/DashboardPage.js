import React, { Component} from 'react';
import PropTypes from 'prop-types'


import {connect} from 'react-redux'
import {allBooksSelector} from '../../reducers/books'

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'
import AddBookCta from '../ctas/AddBookCta'

/**
 * DashboardPage
 */
const DashboardPage = ({isConfirmed}) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
  </div>
)

DashboardPage.propTypes = {
  isConfirmed : PropTypes.bool.isRequired ,
  books : PropTypes.arrayOf(PropTypes.shape({
    title : PropTypes.string.isRequired
  }).isRequired).isRequired
}


function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
  }
}

export default connect(mapStateToProps)(DashboardPage)
