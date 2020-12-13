import knex from 'knex'

const connection = knex({
    client: 'pg',
    connection: {
        host: "localhost",
        database: 'todo',
        user: 'postgres',
        password: 'marcos',
        port: 5432
    }
})

export default connection