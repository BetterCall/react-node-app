import {LOGIN_SUCCESS , LOGIN_ERROR , LOGOUT_SUCCESS} from '../types'

export default function user(state = {} , action = {}) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return action.user

    case LOGOUT_SUCCESS :
      return {}

    default: return state

  }
}
