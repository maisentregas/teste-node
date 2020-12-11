import { TodoModel } from "../../../domain/models/todo";
import { AddTodoModel, DeleteTodoModel, Todo, UpdateTodoModel } from "../../../domain/usecases/todo";
import { TodoDbAdapter } from "../../protocols/todo-db-adapter";

export class DbTodo implements Todo {
    private readonly todoDbAdapter: TodoDbAdapter;
    constructor(todoDbAdapter: TodoDbAdapter) {
        this.todoDbAdapter = todoDbAdapter;
    }

    list(): Promise<Array<TodoModel>> {
        return this.todoDbAdapter.list();
    }
    
    async get(todoId: number): Promise<TodoModel> {
        const response = await this.todoDbAdapter.get(todoId);
        if (!response || response.hidden) {
            return Promise.reject(new Error('Id inválido!'));
        }

        return Promise.resolve(response);
    }

    add(addTodoModel: AddTodoModel): Promise<TodoModel> {
        if (!addTodoModel.description) {
            return Promise.reject(new Error('Descrição inválida!'));
        }
        return this.todoDbAdapter.add(addTodoModel);
    }

    async update(updateTodoModel: UpdateTodoModel): Promise<TodoModel> {
        if (!updateTodoModel.id || !await this.get(updateTodoModel.id)) {
            return Promise.reject(new Error('Id inválido!'));
        } else if (!updateTodoModel.description) {
            return Promise.reject(new Error('Descrição inválida!'));
        }
        return this.todoDbAdapter.update(updateTodoModel);
    }

    async delete(deleteTodoModel: DeleteTodoModel): Promise<TodoModel> {
        if (!deleteTodoModel.id || !await this.get(deleteTodoModel.id)) {
            return Promise.reject(new Error('Id inválido!'));
        }
        return this.todoDbAdapter.delete(deleteTodoModel);
    }
}