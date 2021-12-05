
const express= require ("express");
const router= express.Router();
const usuariosController= require ("../../controllers/apis/usuariosController.js");

router.get("/users", usuariosController.list);
router.get('/users/:id', usuariosController.detail);

module.exports = router;
