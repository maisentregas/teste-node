import { DbTodo } from "./db-todo";

const makeSut = () => {
    const sut = new DbTodo();
    return { sut };
}

describe('DbTodo Usecases', () => {
    // Criar um Todo
    test('Deveria dar erro quando tentasse criar um Todo sem descrição', async () => {
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

    test('Deveria dar erro quando tentasse editar um Todo sem id', async () => {
        try {
            const { sut } = makeSut();
            await sut.update({ id: null, description: 'any_description' });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });

    test('Deveria dar erro quando tentasse editar um Todo sem parâmetro', async () => {
        try {
            const { sut } = makeSut();
            await sut.update({ id: null, description: null });
            fail();
        } catch(err) {
            expect(err.toString()).toMatch('Error');
        }
    });
});