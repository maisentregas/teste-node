import request from 'supertest'
import app from '../src/app'

test('Deve cadastrar novas tarefas', () => {
    return request(app).post('/')
        .send({
            name: 'Descer o Lixo',
            done: false
        })
        .then(res => {
            expect(res.status).toBe(201)
            expect(res.body[0]).toHaveProperty('name')
        })
})

