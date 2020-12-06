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
                description: 'any_description',
                created_at: -1,
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
        try {
            const { sut } = makeSut();
            await sut.add({ });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });

    test('Deveria criar um Todo quanto todos os parâmetros estivessem corretos', async () => {
        const { sut } = makeSut();
        const response = await sut.add({ description: 'any_description' });
        expect(response).toBeTruthy();
        expect(response.description).toBe('any_description');
    });

    // Editar um Todo
    test('Deveria dar erro quando tentasse editar um Todo sem descrição', async () => {
        try {
            const { sut } = makeSut();
            await sut.update({ id: 1 });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });

    test('Deveria dar erro quando tentasse editar um Todo sem id', async () => {
        try {
            const { sut } = makeSut();
            await sut.update({ description: 'any_description' });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });

    test('Deveria dar erro quando tentasse editar um Todo sem parâmetro', async () => {
        try {
            const { sut } = makeSut();
            await sut.update({ });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });

    test('Deveria editar um Todo quanto todos os parâmetros estivessem corretos', async () => {
        const { sut } = makeSut();
        const response = await sut.update({ id: -1, description: 'any_description' });
        expect(response).toBeTruthy();
        expect(response.id).toBe(-1);
        expect(response.description).toBe('any_description');
    });

    // Deletar um Todo
    test('Deveria dar erro quando tentasse deletar um Todo sem parâmetro', async () => {
        try {
            const { sut } = makeSut();
            await sut.delete({ });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });
    
    test('Deveria deletar um Todo quanto todos os parâmetros estivessem corretos', async () => {
        const { sut } = makeSut();
        const response = await sut.delete({ id: -1 });
        expect(response).toBe(true);
    });
});