import express from 'express'
import indexRoute from './routes/index.js'

const app = express()

app.use(indexRoute)

app.listen(3000, ()=>{
    console.log("server on port")
})