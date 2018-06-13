import express from 'express'
import User from '../models/User'

import { sendConfirmationEmail } from '../mailer'
import parseErrors from '../utils/parseErrors'

const router = express.Router()

/**
* Route : "/"
*   create user with email and password
*
**/
router.post('/', (req, res)=> {

  const { email, password } = req.body.user
  const user = new User({email})
  user.setPassword(password)
  user.setConfirmationToken()

  user
    .save()
    .then( user => {
      sendConfirmationEmail(user)
      res.json({ user : user.toAuthJSON() })
    })
    .catch( err => res.status(400).json({errors : parseErrors(err.errors)}))
})

/**
*
*
*
**/

export default router
