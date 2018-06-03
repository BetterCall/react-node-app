import Api from '../api/Api'
import {LOGIN_SUCCESS , LOGIN_ERROR , LOGOUT_SUCCESS} from '../types'

export const login = (credentials) => (dispatch) => {

  return new Promise(function(resolve, reject) {
    Api.AuthApi.loginWithEmail(credentials)
      .then((user) => {
        localStorage.appUserUID = user.uid
        dispatch(loginSuccess(user))
        resolve(user)
      })
      .catch(e => {
        dispatch(loginError(e))
        reject(e)
      })
  })

}

export const logout = () => (dispatch) => {
  localStorage.removeItem('appUserUID')
  dispatch(logoutSuccess())
}

export const loginSuccess = (user) => ({
  type : LOGIN_SUCCESS,
  user
})
const loginError = (err) => ( {
  type : LOGIN_ERROR,
  err
})

const logoutSuccess = () => ( {
  type : LOGOUT_SUCCESS
})
