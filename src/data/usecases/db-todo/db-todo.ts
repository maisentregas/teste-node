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
    
    get(todoId: number): Promise<TodoModel> {
        if (!todoId) {
            return Promise.reject(new Error('Id inválido!'));
        }
        return this.todoDbAdapter.get(todoId);
    }

    add(addTodoModel: AddTodoModel): Promise<TodoModel> {
        if (!addTodoModel.description) {
            return Promise.reject(new Error('Descrição inválida!'));
        }
        return this.todoDbAdapter.add(addTodoModel);
    }

    update(updateTodoModel: UpdateTodoModel): Promise<TodoModel> {
        if (!updateTodoModel.id) {
            return Promise.reject(new Error('Id inválido!'));
        } else if (!updateTodoModel.description) {
            return Promise.reject(new Error('Descrição inválida!'));
        }
        return this.todoDbAdapter.update(updateTodoModel);
    }

    delete(deleteTodoModel: DeleteTodoModel): Promise<Boolean> {
        if (!deleteTodoModel.id) {
            return Promise.reject(new Error('Id inválido!'));
        }
        return this.todoDbAdapter.delete(deleteTodoModel);
    }
}