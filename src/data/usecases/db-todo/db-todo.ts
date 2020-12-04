import { TodoModel } from "../../../domain/models/todo";
import { AddTodoModel, DeleteTodoModel, Todo, UpdateTodoModel } from "../../../domain/usecases/todo";

export class DbTodo implements Todo {
    list(): Promise<Array<TodoModel>> {
        return Promise.resolve([{
            id: -1,
            description: 'any_description',
            created_at: -1,
        }, {
            id: 0,
            description: 'any_description',
            created_at: 0,
        }]);
    }
    get(todoId: number): Promise<TodoModel> {
        return Promise.resolve({
            id: todoId,
            description: 'any_description',
            created_at: -1,
        });
    }
    add(addTodoModel: AddTodoModel): Promise<TodoModel> {
        if (!addTodoModel.description) {
            throw new Error('Descrição inválida!');
        }

        return Promise.resolve({
            id: -1,
            description: 'any_description',
            created_at: -1,
        });
    }
    update(updateTodoModel: UpdateTodoModel): Promise<TodoModel> {
        return Promise.resolve({
            id: -1,
            description: 'updated_description',
            created_at: -1,
        });
    }
    delete(deleteTodoModel: DeleteTodoModel): Promise<Boolean> {
        return Promise.resolve(true);
    }
}