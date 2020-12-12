import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('task').insert([
        { name: 'Lavar as Louças', done: false },
        { name: 'Estudar', done: false },
        { name: 'Jogar o lixo fora', done: true },
        { name: 'Dormir', done: true },
    ])
}