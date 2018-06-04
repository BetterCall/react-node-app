import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import Promise from 'bluebird'

// routes
import auth from './routes/auth'

dotenv.config()

const app = express()
app.use(bodyParser.json())
// database connection
mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URL)

// route
app.use('/api/auth',auth)


app.get('/*', (req , res) => {
  res.sendFile(path.join(__dirname , "index.html"))
})

app.listen(8080 , ()=> console.log("running on localhost:8080"))
