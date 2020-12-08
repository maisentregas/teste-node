import { AddTodoModel, TodoModel } from "./todo-protocols";
import TodoSequelizeModel from "../models/todo-sequelize-model";

export class SequelizeTodoDbAdapter {
    async truncate(): Promise<void> {
        await TodoSequelizeModel.destroy({ truncate: true, cascade: false });
    }
    async add(addTodoModel: AddTodoModel): Promise<TodoModel> {
        const model = await TodoSequelizeModel.create({ ...addTodoModel });
        model.save();
        return model;
    }   
}