const express = require('express')
const pool = require('../database/db')
const router = express.Router()


router.get('/',(req,res)=>{
    if(req.session.loggead){
        res.render('publication')
    }else{
        res.redirect('/')
    }
})

router.post('/',(req,res)=>{
    pool.query("insert into posts set ?",{post_text:req.body.text,post_img:req.body.imagen,post_like:0,id_user:req.session.name},(error,response)=>{
        if(error){
            res.render('publication',{
                alert:true,
                alertTitle:"Error",
                alertMessage:"Error al publicar la foto",
                alertIcon:'error',
                showConfirmButton:false,
                time:1500,
                ruta:'main'
            })
        }else{
            res.render('publication',{
                alert:true,
                alertTitle:"Publicada!",
                alertMessage:"Foto publicada correctamente",
                alertIcon:'success',
                showConfirmButton:false,
                time:2000,
                ruta:'main'
        })
        }
    })
})


module.exports = router