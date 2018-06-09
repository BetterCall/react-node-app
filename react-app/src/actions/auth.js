import api from '../api/api'

import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";


export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

/**
*
* Login methods
**/

export const login =  credentials => dispatch => {

  api.user.loginWithEmail(credentials)
    .then(user => {
      localStorage.bookwormJWT = user.token
      //setAuthorizationHeader(user.token);
      dispatch(userLoggedIn({ ...user, loaded: true }))
    })
}

// login with email / password
export const loginWithEmail = credentials => dispatch => {

  api.user.loginWithEmail(credentials)
    .then(user => {
      localStorage.bookwormJWT = user.token
      //setAuthorizationHeader(user.token);
      dispatch(userLoggedIn({ ...user, loaded: true }))
    })
}

// Login with Google account
export const loginWithGoogle = ()  =>{
   window.open('http://localhost:8080/auth/google')
}
  //api.user.loginWithGoogle()



export const logout = () => dispatch => {
  localStorage.removeItem("bookwormJWT");
  //setAuthorizationHeader();
  dispatch(userLoggedOut());
}

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.bookwormJWT = user.token
    dispatch(userLoggedIn(user))
})

export const resetPasswordRequest = ({ email }) => () =>
  api.user.resetPasswordRequest(email)

export const validateToken = token => () =>
  api.user.validateToken(token);

export const resetPassword = data => () => api.user.resetPassword(data);
