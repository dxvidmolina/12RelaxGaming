module.exports = (sequelize, DataTypes) => {

    let alias = 'Producto';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        discount:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imgref:{
            type: DataTypes.STRING,
            allowNull: false
        }
        

    }
    let config = {
        tableName: 'productos',
        timestamps:false
    }
const Producto = sequelize.define(alias, cols, config)

Producto.associate = function(models){
    Producto.belongsTo(models.Genres, {
        as: "generos",
        foreignKey: "genre_id"
    })
    Producto.hasMany(models.Imgref,{
        as: "images",
        foreignKey: "producto_id"
    })

}

    return Producto;
}