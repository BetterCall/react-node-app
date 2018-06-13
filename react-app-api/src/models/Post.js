import mongoose from 'mongoose'


const schema = new mongoose.Schema({
  author : {
    type : String,
    required : true,
  } ,
  provider : {
    type : String
  }
})


export default mongoose.model('Post' , schema)
