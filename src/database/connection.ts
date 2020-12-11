import knex from 'knex'

const connection = knex({
    client: 'pg',
    connection: {
        database: 'todo',
        user: 'postgres',
        password: 'marcos'
    }
})

export default connection