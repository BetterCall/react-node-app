import {auth} from './FirebaseInit'

export default class AuthApi {

  // Sign Up
  createUserWithEmailAndPassword = (email, password) => {
    const createUserWithEmailAndPassword = (email, password)
  }

// Sign In
  loginWithEmail = (credentials) => {
    console.log(credentials)
    const {email , password} = credentials

    return new Promise(function(resolve, reject) {
        auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })

    });


  }

// Sign out
  signOut = () =>
    auth.signOut();

}
