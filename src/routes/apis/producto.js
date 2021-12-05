const express= require ("express");
const router= express.Router();
const productoController= require ("../../controllers/apis/productosController");

router.get("/products",productoController.list);
router.get('/products/:id', productoController.detail);

module.exports = router;