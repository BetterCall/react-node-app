import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
// component 
import {Card, Icon} from 'semantic-ui-react'

const AddBookCta = () => {
  return (
    <Card centered>
      <Card.Content
        textAlign="center"
      >
        <Card.Header>Add New Book</Card.Header>
        <Link to="books/new">
          <Icon name="plus circle" size="massive" />
        </Link>
      </Card.Content>
    </Card>
  )
}

export default AddBookCta
