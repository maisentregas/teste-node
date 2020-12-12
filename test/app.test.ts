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

test('Deve impedir de inserir dados vazios', () => {
    return request(app).post('/')
        .send({
            name: null
        })
        .then(res => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Campos obrigatórios.')
        })
})

test('Deve exibir todas as Tarefas Cadastradas', () => {
    return request(app).get('/')
        .then(res => expect(res.status).toBe(200))
})

test('Deve editar uma task de acordo com o ID setado', () => {
    return request(app).put('/1')
        .send({
            name: 'Comer e Dormir',
            done: true
        })
        .then(res => {
            expect(res.status).toBe(200)
            expect(res.body[0]).toHaveProperty('name')
        })
})

test('Deve impedir de editar uma Tarefa com ID inválido', () => {
    return request(app).put('/0')
        .send({
            name: 'Comer e Dormir',
            done: true
        })
        .then(res => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Selecione uma tarefa válida.')
        })
})

test('Deve impedir de usar valores inválidos na edição', () => {
    return request(app).put('/1')
        .send({
            name: null,
            done: null
        })
        .then(res => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Campos obrigatórios.')
        })

})

// test('Deve deletar uma Tarefa de acordo com o ID informado', () => {
//     return request(app).del('/1')
//         .then(res => {
//             expect(res.status).toBe(200)
//             expect(res.body.success).toBe('Tarefa Deletada.')
//         })

// })

test('Deve impedir de deletar uma Tarefa com ID inválido', () => {
    return request(app).del('/0')
        .then(res => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Selecione uma tarefa válida.')
        })
})

