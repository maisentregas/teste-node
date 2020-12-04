import { DbTodo } from "./db-todo";

const makeSut = () => {
    const sut = new DbTodo();
    return { sut };
}

describe('DbTodo Usecases', () => {
    // Criar um Todo
    test('Deveria criar um Todo se os parametros estiverem válidos', async () => {
        try {
            const { sut } = makeSut();
            await sut.add({ description: null });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });

    // Editar um Todo
    test('Deveria dar erro quando tentasse editar um Todo sem descrição', async () => {
        try {
            const { sut } = makeSut();
            await sut.update({ id: 1, description: null });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });
});