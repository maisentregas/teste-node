import { TodoController } from './todo-controller';

describe('Todo-Controller', () => {
    test('Deveria retornar o erro 500 ao tentar criar Todo inválido', async () => {
        const sut = new TodoController();
        const request = {
            body: {},
        };

        const response = await sut.handle(request);
        expect(response.statusCode).toBe(500);
    });
});