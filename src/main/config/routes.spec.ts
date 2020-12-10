import request from 'supertest';
import SequelizeHelper from '../../infra/sequelize/helpers/sequelize-helper';
import { SequelizeTodoDbAdapter } from '../../infra/sequelize/todo/todo';
import app from '../config';

describe('Express Routes', () => {
    let sut: SequelizeTodoDbAdapter;
    beforeAll(async () => {
        await SequelizeHelper.connect();
    });
    afterAll(async () => {
        await sut.truncate();
        await SequelizeHelper.disconnect();
    });
    test('Deveria retornar o statusCode 200 caso consiga criar um Todo', async () => {
        await request(app)
            .post('/v1/todo')
            .send({ description: 'any_description' })
            .expect(200);
    });
});