const express = require('express')
const router = express.Router()

const pool = require('../database/db')

router.get('/',(req,res)=>{
    if(req.session.loggead){
        res.render('main',{login:true,name:req.session.name})
    }else{
        res.redirect('/')
    }
})

router.get('/load',(req,res)=>{
    pool.query('select * from posts',(error,response)=>{
        //res.send({'hola':req.session.name});
        res.send(response);
    })


})


module.exports = router