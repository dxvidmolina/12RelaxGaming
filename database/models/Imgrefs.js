module.exports = (sequelize, DataTypes) => {

    let alias = 'Imgref';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        imgref1:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        producto_id:{
            type: DataTypes.INTEGER
        }

}
    let config = {
        tableName: 'imgrefs',
        timestamps: false
    }

const Imgref = sequelize.define(alias, cols, config)
    Imgref.associate= function(models){
        Imgref.belongsTo(models.Producto,{
            as:"producto",
            foreignKey:"producto_id"
        })
    }

    return Imgref;
}