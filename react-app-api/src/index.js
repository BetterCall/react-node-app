import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import bodyParser from 'body-parser'

// routes
import auth from './routes/auth'


const app = express()
app.use(bodyParser.json())
// database connection
mongoose.connect('mongodb://localhost/bookworm')

// route
app.use('/api/auth',auth)


app.get('/*', (req , res) => {
  res.sendFile(path.join(__dirname , "index.html"))
})

app.listen(8080 , ()=> console.log("running on localhost:8080"))
