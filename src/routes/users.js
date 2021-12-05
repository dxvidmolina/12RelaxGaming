var express = require('express');
var router = express.Router();
const loginController= require ("../controllers/loginController.js")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

/* GET users listing. */
router.get('/', guestMiddleware,loginController.entrarLogin);
router.post('/', loginController.processLogin)
router.get('/perfil', loginController.profile)
router.get("/logout", loginController.logout)


module.exports = router;
