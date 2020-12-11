const { Model, DataTypes } = require('sequelize');


class Todo extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize,
            tableName: 'todos',
            timestamps: false,
        });
    }
}

module.exports = Todo;