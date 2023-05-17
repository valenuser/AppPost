const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',require('./routes/index'))

app.listen(3000,(req,res)=>{
    console.log('SERVER RUNNING IN PORT http://locahost:3000');
})