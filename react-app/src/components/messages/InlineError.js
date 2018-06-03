import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../../consts/Colors'

const InlineError = ({text}) => (
  <span style={{color : Colors.error}}>
    {text}
  </span>
)


InlineError.PropTypes = {
  text : PropTypes.string.isRequired
}

export default InlineError
