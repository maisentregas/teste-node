import { DataTypes, Model, Sequelize } from "sequelize";

export default class TodoSequelizeModel extends Model {
    public id!: number;
    public description!: string;
}

export const initTodoSequelizeModel = (sequelize: Sequelize) => {
    TodoSequelizeModel.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'todo_list',
        sequelize,
    });
}