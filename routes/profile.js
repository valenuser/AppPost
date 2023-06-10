const express = require('express')
const pool = require('../database/db')

const router = express.Router()

router.get('/',(req,res)=>{
    if(req.session.loggead){
        res.render('profile')
    }else{
        res.redirect('/')
    }
})

router.get('/load',(req,res)=>{
    pool.query('select * from posts where id_user ='+req.session.name,(error,response)=>{
        if(error){
            res.send('error')
        }else{
            res.send(response)
        }
    })
})

module.exports = router