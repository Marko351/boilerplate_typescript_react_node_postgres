import * as Knex from 'knex'

const TABLE_NAME = 'users'

export async function up(knex: Knex): Promise<void> {
  const isExists = await knex.schema.hasTable(TABLE_NAME)
  if (!isExists) {
    await knex.schema.createTable(TABLE_NAME, (table) => {
      table.increments('id').primary()
      table.timestamp('creation_date').notNullable().defaultTo(knex.fn.now())

      table.specificType('username', 'VARCHAR(50)').notNullable()
      table.specificType('email', 'VARCHAR(50)').notNullable()
      table.specificType('password', 'VARCHAR(255)').notNullable()
    })
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.raw(`drop table if exists ${TABLE_NAME} cascade;`)
}
