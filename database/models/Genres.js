module.exports = (sequelize, DataTypes) => {

    let alias = 'Genres';
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
        }
    
}
    let config = {
        tableName: 'genres',
        timestamps: false
    }

const Genre = sequelize.define(alias, cols, config)

Genre.associate = function(models){
    Genre.hasMany(models.Producto, {
        as: "Productos",
        foreignKey: "genre_id"
    });
}


    return Genre;
}