const express = require('express')
const morgan = require('morgan')
const helmet =  require('helmet')
const cors = require('cors')
const app = express()

app.use(morgan("common"))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.status(200).json(req.body)
})

app.listen(80,()=>{
    console.log('On Start!')
})