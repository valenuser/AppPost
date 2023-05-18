const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/resource',express.static('public'))

app.use('/resource',express.static(__dirname+'/public'))


app.set('view engine','ejs')

app.use('/',require('./routes/index'))

app.use('/register',require('./routes/register'))


app.use('/login',require('./routes/login'))

app.listen(3000,(req,res)=>{
    console.log('SERVER RUNNING IN PORT http://locahost:3000');
})