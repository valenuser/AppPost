const express = require('express')

const router = express.Router()


const pool = require('../database/db')

router.get('/',(req,res)=>{
    res.render('login')
})


router.post('/',(req,res)=>{
    const nombre = req.body.nombre
    const  pass = req.body.pass

    if(nombre == '' || pass == ''){
        res.render('login',{
            alert:true,
            alertTitle:"Advertencia!",
            alertMessage:"¡Por favor ingrese los datos que se solicitan para poder loggearse!",
            alertIcon:'warning',
            showConfirmButton:false,
            time:1500,
            ruta:'login'
        })
    }else{
        pool.query('select id_user from users where user_name = ?',[nombre],(error,results)=>{
            if(results.length == 0 || error){
                res.render('login',{
                    alert:true,
                    alertTitle:"Error de autenticacion",
                    alertMessage:"¡Por favor vuelva a introducir los datos",
                    alertIcon:'error',
                    showConfirmButton:false,
                    time:1500,
                    ruta:'login'
                })
            }else{
                req.session.loggead = true
                req.session.name = results[0].id_user
                res.render('login',{
                        alert:true,
                        alertTitle:" ",
                        alertMessage:"Cargando..",
                        alertIcon:'success',
                        showConfirmButton:false,
                        time:2000,
                        ruta:'main'
                })
            }
        })
    }
})

module.exports = router