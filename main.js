const express = require('express')
const morgan = require('morgan')
const helmet =  require('helmet')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(morgan("combined"))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('salami induveca!')
})

app.get('/test',(req,res)=>{
    res.status(200).json({'message':'success'})
})

app.listen(PORT,()=>{
    console.log('On Start!')
})