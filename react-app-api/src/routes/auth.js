import express from 'express'
import User from '../models/User'

const router = express.Router()

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

router.post('/validate_token' , (req, res) => {
  const { token } = req.body

})

export default router
