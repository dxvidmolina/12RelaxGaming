const express = require ("express");
const router = express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");
const registerController= require ("../controllers/registerController.js")
const { body } = require("express-validator");

const { check } = require("express-validator");
const validateRegister =[
    check("nombre")
        .notEmpty().withMessage("Ingrese un nombre").bail()
        .isLength({min: 5}).withMessage("Ingresar un nombre válido"),
    check("email1")
        .notEmpty().withMessage('Ingrese un email').bail()
        .isEmail().withMessage("Ingrese un email válido"),
    check("email")
        .notEmpty().withMessage("Ingrese un email para confirmar").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    check("password")
        .notEmpty().withMessage("Ingrese una contraseña").bail()
        .isLength({min: 8}).withMessage("Ingrese al menos 8 carácteres"),
    check("password1")
        .notEmpty().bail()
        .isLength({min: 8}).withMessage('Ingrese al menos 8 carácteres'),
];

router.get ("/", guestMiddleware, registerController.crearUsuario);
router.post ("/", validateRegister, registerController.guardarUsuario);

module.exports = router;