import SequelizeHelper from '../helpers/sequelize-helper';
import { SequelizeTodoDbAdapter } from './todo';

describe('Sequelize Todo Db Adapter', () => {
    let sut: SequelizeTodoDbAdapter;
    beforeAll(async () => {
        await SequelizeHelper.connect();
    });
    afterAll(async () => {
        await sut.truncate();
        await SequelizeHelper.disconnect();
    });
    test('Deveria retornar a conta caso os dados estiverem válidos', async () => {
        sut = new SequelizeTodoDbAdapter();
        const response = await sut.add({ description: 'any_description' });
        expect(response).toBeTruthy();
        expect(response.id).toBe(1);
        expect(response.description).toBe('any_description');
    });
});