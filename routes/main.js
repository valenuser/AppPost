const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    if(req.session.loggead){
        res.render('main',{login:true,name:req.session.name})
    }else{
        res.redirect('/')
    }
})


module.exports = router