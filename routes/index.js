const express = require('express')
const pool = require('../database/db')
const router = express.Router()



router.get('/',(req,res)=>{
    pool.query('select * from users',(error,res)=>{
        console.log(res);
    })
})





module.exports= router