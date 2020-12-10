import { AddTodoModel, TodoModel } from "./todo-protocols";
import { TodoDbAdapter } from "../../../data/protocols/todo-db-adapter";
import { UpdateTodoModel, DeleteTodoModel } from "../../../domain/usecases/todo";
import SequelizeHelper from '../helpers/sequelize-helper';

export class SequelizeTodoDbAdapter implements TodoDbAdapter {
    list(): Promise<TodoModel[]> {
        throw new Error("Method not implemented.");
    }
    get(todoId: number): Promise<TodoModel> {
        throw new Error("Method not implemented.");
    }
    update(updateTodoModel: UpdateTodoModel): Promise<TodoModel> {
        throw new Error("Method not implemented.");
    }
    delete(deleteTodoModel: DeleteTodoModel): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    async truncate(): Promise<void> {
        await SequelizeHelper.TodoSequelizeModel.destroy({ truncate: true, cascade: false });
    }
    async add(addTodoModel: AddTodoModel): Promise<TodoModel> {
        const model = await SequelizeHelper.TodoSequelizeModel.create(addTodoModel);
        model.save();
        return model;
    }   
}