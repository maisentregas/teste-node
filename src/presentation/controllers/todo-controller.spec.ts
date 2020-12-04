import { TodoController } from './todo-controller';
import { AddTodoModel, DeleteTodoModel, Todo, UpdateTodoModel } from '../../domain/usecases/todo';
import { TodoModel } from '../../domain/models/todo';

const makeSut = () => {
    class TodoStub implements Todo {
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

    const todoStub = new TodoStub();
    const sut = new TodoController(todoStub);
    return { sut, todoStub };
}

describe('Todo-Controller', () => {
    test('Deveria retornar o statusCode 500 ao tentar criar Todo inválido', async () => {
        const { sut } = makeSut();
        const request = {
            body: {},
        };

        const response = await sut.handle('POST', request);
        expect(response.statusCode).toBe(500);
    });

    test('Deveria retornar o statusCode 200 ao criar Todo válido', async () => {
        const { sut } = makeSut();
        const request = {
            body: {
                description: 'any_description',
            },
        };

        const response = await sut.handle('POST', request);
        expect(response.statusCode).toBe(200);
    });

    test('Deveria criar um Todo se os parametros estiverem válidos', async () => {
        const { sut, todoStub } = makeSut();
        const addSpy = jest.spyOn(todoStub, 'add');
        const request = {
            body: {
                description: 'any_description',
            },
        };

        await sut.handle('POST', request);
        expect(addSpy).toHaveBeenCalledWith({ description: 'any_description' });
    });

    test('Deveria retornar o statusCode 500 ao tentar editar um Todo inválido', async () => {
        const { sut } = makeSut();
        const request = {
            body: { },
        };

        const response = await sut.handle('PUT', request);
        expect(response.statusCode).toBe(500);
    });

    test('Deveria retornar o statusCode 200 ao tentar editar um Todo válido', async () => {
        const { sut } = makeSut();
        const request = {
            body: {
                id: -1,
                description: 'update_description',
            },
        };

        const response = await sut.handle('PUT', request);
        expect(response.statusCode).toBe(200);
    });
    
    test('Deveria editar um Todo se os parametros estiverem válidos', async () => {
        const { sut, todoStub } = makeSut();
        const addSpy = jest.spyOn(todoStub, 'update');
        const request = {
            body: {
                id: -1,
                description: 'any_description',
            },
        };

        await sut.handle('PUT', request);
        expect(addSpy).toHaveBeenCalledWith({ id: -1, description: 'any_description' });
    });
});