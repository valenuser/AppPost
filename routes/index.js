const express = require('express')
const pool = require('../database/db')
const { render } = require('ejs')
const router = express.Router()




router.get('/',(req,res)=>{
    res.render('index')
})




module.exports= router