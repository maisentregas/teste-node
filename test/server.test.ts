import supertest from 'supertest';

const request = supertest('http://localhost:8080')

test('Devo responder na porta 8080', () => {
    return request.get('/')
        .then((res) => expect(res.status).toBe(200))
});