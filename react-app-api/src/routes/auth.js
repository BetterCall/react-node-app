import express from 'express'
import User from '../models/User'
import jwt from 'jsonwebtoken'
import passport from 'passport'

import { sendResetPasswordEmail } from '../mailer'

const router = express.Router()

/**
*
* Login with email / password stuff
*
**/
router.post('/', (req, res) => {
  const {credentials} = req.body
  User.findOne({email : credentials.email})
    .then(user => {
      if(user && user.isValidPassword(credentials.password)) {
        res.json({user: user.toAuthJSON()})
      } else {
        res.status(400).json({
          errors : {
            global : "invalid crendentials"
          } })
      }
    })
})

router.post('/confirmation', (req,res) => {
  const { token } = req.body
  User.findOneAndUpdate(
    {confirmationToken : token } , // search by
    {confirmationToken : "" , confirmed : true} , // upadapte field
    {new : true}  // user updated sent to callback
  ).then(user => {
      user ? res.json({user : user.toAuthJSON()}) : res.status(400).json({})
   })
})

router.post('/reset_password_request' , (req , res) => {
  const { email } = req.body
  User.findOne({email}).then( user => {
    if( user ) {
      sendResetPasswordEmail(user)
      res.json({user : user.toAuthJSON()})
    } else {
      res.status(400).json({
        errors : {
          global : "User not found"
        }
      })
    }
  })
})

router.post('/validate_token' , (req, res) => {
  const { token } = req.body
  jwt.verify(token , process.env.JWT_SECRET , err => {
    if(err) {
      res.status(401).json({})
    } else {
      res.json({})
    }

  })

})

router.post("/reset_password", (req, res) => {

  const { password, token } = req.body.data
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ errors: { global: "Invalid token" } });
    } else {
      User.findOne({ _id: decoded._id }).then(user => {
        if (user) {
          user.setPassword(password);
          user.save().then(() => res.status(200).json({}))
        } else {
          res.status(404).json({ errors: { global: "Invalid token" } })
        }
      })
    }
  })
})

/**
*
* OAuth Routes
*
**/

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
router.get(
  '/google',
  passport
    .authenticate(
      'google',
      {
        scope: 'https://www.google.com/m8/feeds'
      }
    )
)

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  '/google/callback',
  passport
    .authenticate(
      'google',
      {
        failureRedirect: '/login'
      }
    ,(req, res) => {
      console.log('re')
      res.redirect('/');
    })
)





export default router
