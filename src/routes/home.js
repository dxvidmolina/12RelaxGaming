const express = require('express');
const router = express.Router();

/* GET home page. */
const homeController = require("../controllers/homeController.js")

router.get ("/", homeController.entrarHome);
router.get ("/buendia", homeController.hola);

module.exports = router;
