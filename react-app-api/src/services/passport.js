import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

import User from '../models/User'

//import keys
import { googleKeys } from '../config/keys'

/**
* Callback function Google Oauth
*
*
**/
passport.use(new GoogleStrategy(googleKeys, ( accessToken, refreshToken, profile, done) => {
  // find user by google id
  User.findOne({ googleId : profile.id})
    .then( user => {
      if ( user ) {
        console.log('User Found')
        done( null, user ) // (error, result)

      } else {
        new User({ googleId : profile.id })
          .save()
          .then( user => {
            done( null , user)
          })
      }
    })

}))


export default passport
