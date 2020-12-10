import request from 'supertest';
import app from '../config';

describe('Todo Route', () => {
    test('Deveria retornar um Todo válido', async () => {
        await request(app)
            .post('/v1/todo')
            .send({
                description: 'any_description'
            })
            .expect(200);
    });
});