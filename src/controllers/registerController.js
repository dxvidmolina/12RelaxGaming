const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator")
let db= require("../../database/models");

//Funciones

//Reescribir Json
function writeJson(array){
    let arrayJson = JSON.stringify(array);

    return fs.writeFileSync(path.join(__dirname, "../data/user.json"), arrayJson)
}
//Buscar usuarios
function findAll(){
    let usuarioJson= fs.readFileSync(path.join(__dirname, "../data/user.json"))
    let data = JSON.parse(usuarioJson)
    return data 
}


//Funciones

//Controller
const registerController={

    //Entrar a la vista

    crearUsuario: (req, res) => {
        res.render("registro")
    },
    
    //Guardar usuario, con validaciones previas y sin sobreescribir

    guardarUsuario: (req, res) => {
       db.User.create({
            name: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            nickname: req.body.nickname,
            pais: req.body.pais,
            edad: req.body.edad,
        }).then(function(){
             res.redirect("/login")
         })
        /*let errores = validationResult{
            validationResult(req);
        if (!errores.isEmpty()){
            console.log(errores)
            return res.render ('registro', {errores: errores.array()})
        }   
            let usuarios = findAll()
            let passwordEncriptar = bcrypt.hashSync(req.body.password, 10);
            let nuevoUsuario = {
                id: usuarios.length + 1,
                nombre: req.body.nombre,
                nickname: req.body.nickname,
                email: req.body.email,
                pais: req.body.pais,
                edad: req.body.edad,
                password: passwordEncriptar
            }
            if (req.body.email1==req.body.email && req.body.password == req.body.password1){
                let usuarioCheck = findAll().find(function(element) {
                    return element.email == nuevoUsuario.email});
        
                for (i=0; i=findAll().length; i++){
                    console.log(usuarioCheck)
                    if (usuarioCheck == null){
                        let usuariosActualizados = [...usuarios, nuevoUsuario]
                        writeJson(usuariosActualizados)
                        res.redirect("/login")
                    }
                    else{
                        res.redirect("/registro")
                    }
            }
            }else{
                res.render("registro", {
                errorMessage: "Su email o contraseña no coinciden"
            })}
        

        */}
}
        

module.exports = registerController;