const { Model, DataTypes } = require('sequelize');

class list extends Model {
    static init(sequelize) {
        super.init({
           nome: DataTypes.STRING,
           status: DataTypes.INTEGER 
        },{
            sequelize
        })
    }
}

module.exports = list