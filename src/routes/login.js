const express= require ("express");
const { check } = require("express-validator");
const router= express.Router();
const loginController= require ("../controllers/loginController.js")
const loginValidate = [
    check('email')
        .isEmail().withMessage('Ingrese un email válido'),
    check('password')
        .isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres')
]

router.get ("/", loginController.entrarLogin);
router.post("/", loginValidate,loginController.processLogin);
router.get ('/check', function(req, res){
    if (req.session.userLogued == undefined) {
        res.send ("mal")
    }else {
        res.send("usuario " + req.session.userLogued.email)
    }
})
module.exports = router;