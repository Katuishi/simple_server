const express = require('express')
const morgan = require('morgan')
const helmet =  require('helmet')
const cors = require('cors')
const dotenv = require('dotenv')
const ratelimit = require('express-rate-limit')
dotenv.config({path:'./'})

const app = express()
const PORT = 443
const limit = ratelimit({
    windowMs: 50 * 60 * 1000, // 15 minutes
    max: 500 // limit each IP to 100 requests per windowMs
  })
app.use(morgan("dev"))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(limit)
app.get('/',(req,res)=>{
    res.send('salami induveca!')
})

app.get('/test',(req,res)=>{
    res.status(200).json({'message':'success'})
})

app.listen(PORT,()=>{
    console.log('On Start! Port:'+PORT)
})