const express= require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session')
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")
const db = require("../database/models");
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false
}));
app.use(userLoggedMiddleware)
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/producto');
const registerRouter = require('./routes/register');
const { use } = require('./routes/register');
const apiProducto = require('./routes/apis/producto');
const apiUsers = require('./routes/apis/usuarios');
//const apiUsuarios = require('./routes/apis/usuarios');
/*const adminAddRouter = require('');
const adminRouter = require('');
*/

app.get('/carrito', (req, res) => {
    res.render('carrito')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride("_method"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));


app.use('/', homeRouter);

app.get('/buendia', function(req,res){
  res.render('hola')
})
app.use('/login', usersRouter);
app.use('/products', productRouter)
app.use('/registro', registerRouter)
app.use('/api', apiProducto)
app.use('/api', apiUsers)
app.post('/busqueda',(req,res)=>{
  db.Producto.findOne({
    where: {name: req.body.paraBuscar}
  }).then(function(busqueda){
    res.render('busqueda', {busqueda:busqueda})
  })
})
//app.use("/api", apiUsuarios)
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('errors');
});

app.listen(3030, ()=> {
    console.log('Pagina corriendo en http://localhost:3030')
})

module.exports = app;

