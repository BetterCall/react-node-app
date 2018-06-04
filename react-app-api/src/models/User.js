import mongoose from 'mongoose'
// module
import bcrypt from 'bcrypt'

// TODO : add uniqueness and email validation to email field
const schema = new mongoose.Schema({
  email : {
    type : String,
    required : true ,
    lowercase : true ,
    index : true
  } ,
  passwordHash : {
    type : String ,
    required : true
  }
}, {
  timestamps : true
})

// Validations

/**
*
*
*/
schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}


export default mongoose.model('User' , schema)
