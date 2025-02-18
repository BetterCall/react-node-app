import React, { Component } from 'react';
import PropTypes from 'prop-types'


import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import actions
import {logout} from '../../actions/auth'

import {Menu , Dropdown , Image} from 'semantic-ui-react'
import gravatarUrl from 'gravatar-url'

/**
 * TopNavigation
 */
const TopNavigation = ({ user, logout }) => (
  <Menu secondary pointing style={{marginTop : 15}}>
  <Menu.Item as={Link} to="/dashboard">
    Dashboard
  </Menu.Item>

  <Menu.Menu position="right">
    <Dropdown  trigger={<Image avatar src={gravatarUrl("bryann@brovia.com")} />}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Menu>
</Menu>
)



TopNavigation.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps , {logout})(TopNavigation)
