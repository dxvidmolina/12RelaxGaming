const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js");
const multer= require('multer');
const guestMiddleware = require("../middlewares/guestMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware") 
const registerController= require ("../controllers/registerController.js");
const { check } = require("express-validator");
const validateCreate =[
    check("name")
        .notEmpty().withMessage("Ingresar un nombre").bail()
        .isLength({min: 5}).withMessage("Ingresar al menos 5 caracteres"),
    check("desc")
        .isLength({min: 20}).withMessage("Ingresar una descripción de al menos 20 caracteres"),
];


router.get("/lista",productoController.list);
router.get("/producto",productoController.entrarproducto);
router.get("/create", productoController.create);
router.post("/create", validateCreate, productoController.storage);
router.get('/:id', productoController.detail);
router.get('/edit/:id', productoController.edit);
router.post('/edit/:id',productoController.upload);
router.delete('/edit/:id', productoController.destroy)

module.exports = router;