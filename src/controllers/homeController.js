const db = require ('../../database/models/')
const Genres = require ('../../database/models/Genres')


const homeController={
    entrarHome:(req,res)=>{
        res.render("home")
        
    },
    hola:(req,res)=>{
        db.Genres.findAll()
            .then(hola)

    }
    
}
module.exports= homeController;