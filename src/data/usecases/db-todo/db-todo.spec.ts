import { DbTodo } from "./db-todo";
import { TodoDbAdapter } from '../../protocols/todo-db-adapter';
import { TodoModel } from "../../../domain/models/todo";
import { AddTodoModel, UpdateTodoModel, DeleteTodoModel } from "../../../domain/usecases/todo";

const makeTodoDbAdapter = () => {
    class TodoDbAdapterStub implements TodoDbAdapter {
        list(): Promise<Array<TodoModel>> {
            return Promise.resolve([{
                id: -1,
                description: 'any_description',
                createdAt: -1,
                updatedAt: -1,
            }, {
                id: 0,
                description: 'any_description',
                createdAt: -1,
                updatedAt: -1,
            }]);
        }
        get(todoId: number): Promise<TodoModel> {
            return Promise.resolve({
                id: todoId,
                description: 'any_description',
                createdAt: -1,
                updatedAt: -1,
            });
        }
        add(addTodoModel: AddTodoModel): Promise<TodoModel> {
            return Promise.resolve({
                id: -1,
                description: 'any_description',
                createdAt: -1,
                updatedAt: -1,
            });
        }
        update(updateTodoModel: UpdateTodoModel): Promise<TodoModel> {
            return Promise.resolve({
                id: -1,
                description: 'new_description',
                createdAt: -1,
                updatedAt: -1,
            });
        }
        delete(deleteTodoModel: DeleteTodoModel): Promise<Boolean> {
            return Promise.resolve(true);
        }
    }
    return new TodoDbAdapterStub();
}

const makeSut = () => {
    const todoDbAdapter = makeTodoDbAdapter();
    const sut = new DbTodo(todoDbAdapter);
    return { sut, todoDbAdapter };
}

describe('DbTodo Usecases', () => {
    // Criar um Todo
    test('Deveria dar erro quando tentasse criar um Todo sem descrição', async () => {
        const { sut } = makeSut();
        const response = sut.add({ });
        await expect(response).rejects.toEqual(new Error('Descrição inválida!'));
    });

    test('Deveria criar um Todo quanto todos os parâmetros estivessem corretos', async () => {
        const { sut } = makeSut();
        const response = await sut.add({ description: 'any_description' });
        expect(response).toBeTruthy();
        expect(response.description).toBe('any_description');
    });

    // Editar um Todo
    test('Deveria dar erro quando tentasse editar um Todo sem descrição', async () => {
        const { sut } = makeSut();
        const response = sut.update({ id: 1 });
        await expect(response).rejects.toEqual(new Error('Descrição inválida!'));
    });

    test('Deveria dar erro quando tentasse editar um Todo sem id', async () => {
        const { sut } = makeSut();
        const response = sut.update({ description: 'any_description' });
        await expect(response).rejects.toEqual(new Error('Id inválido!'));
    });

    test('Deveria dar erro quando tentasse editar um Todo sem parâmetro', async () => {
        const { sut } = makeSut();
        const response = sut.update({ });
        await expect(response).rejects.toThrow();
    });

    test('Deveria editar um Todo quanto todos os parâmetros estivessem corretos', async () => {
        const { sut } = makeSut();
        const response = await sut.update({ id: -1, description: 'any_description' });
        expect(response).toBeTruthy();
        expect(response.id).toBe(-1);
        expect(response.description).toBe('new_description');
    });

    // Deletar um Todo
    test('Deveria dar erro quando tentasse deletar um Todo sem parâmetro', async () => {
        const { sut } = makeSut();
        const response = sut.delete({ });
        await expect(response).rejects.toEqual(new Error('Id inválido!'));
    });
    
    test('Deveria deletar um Todo quanto todos os parâmetros estivessem corretos', async () => {
        const { sut } = makeSut();
        const response = await sut.delete({ id: -1 });
        expect(response).toBe(true);
    });

    // Listar Todos
    test('Deveria listar todos os Todos', async () => {
        const { sut } = makeSut();
        const response = await sut.list();
        expect(response).toBeTruthy();
    });

    // Mostrar Todos
    test('Deveria dar erro quando tentasse mostrar um Todo inválido', async () => {
        const { sut } = makeSut();
        const response = sut.get(NaN);
        await expect(response).rejects.toEqual(new Error('Id inválido!'));
    });

    test('Deveria mostrar Todo quando inserisse um id válido', async () => {
        const { sut } = makeSut();
        const response = await sut.get(-1);
        expect(response).toBeTruthy();
        expect(response.id).toBe(-1);
        expect(response.description).toBe('any_description');
        expect(response.createdAt).toBe(-1);
        expect(response.updatedAt).toBe(-1);
    });
});