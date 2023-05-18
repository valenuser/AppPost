const express = require('express')

const router = express.Router()

const pool = require('../database/db')

router.get('/',(req,res)=>{
    res.render('register')
})

router.post('/',(req,res)=>{
    const name = req.body.nombre
    const email =req.body.email
    const pass = req.body.pass
    console.log(req.body);
    if(name == '' || email == '' || pass == ''){ 
        res.render('register',{
            alert:true,
            alertTitle:"Advertencia!",
            alertMessage:"¡Por favor ingrese los datos que se solicitan para poder registrarse!",
            alertIcon:'warning',
            showConfirmButton:false,
            time:1500,
            ruta:'register'
        })

    }else{
        pool.query('INSERT INTO users SET ?',{user_name:name,user_email:email, user_pass:pass},(error,result)=>{
            if(error){
                console.log(error);
            }else{
                res.render('register',{
                    alert:true,
                    alertTitle:"Registration",
                    alertMessage:"¡Successful Registration!",
                    alertIcon:'success',
                    showConfirmButton:false,
                    time:1500,
                    ruta:''
                })
            }
        })
    }
})

module.exports = router