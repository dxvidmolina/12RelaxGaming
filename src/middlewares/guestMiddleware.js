function guestMiddleware(req, res, next){
    if (req.session.userLogged) {
        res.redirect("/login/perfil")
    }
    next()
}

module.exports = guestMiddleware;