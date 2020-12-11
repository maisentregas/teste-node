import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('task', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.boolean('done').defaultTo(true)
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('task')
}