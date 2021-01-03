import * as Knex from 'knex'

const TABLE_NAME = 'checklists'

export async function up(knex: Knex): Promise<void> {
  const isExists = await knex.schema.hasTable(TABLE_NAME)
  if (!isExists) {
    await knex.schema.createTable(TABLE_NAME, (table) => {
      table.increments('id').primary()
      table.timestamp('creation_date').notNullable().defaultTo(knex.fn.now())

      table.integer('task_id').notNullable().unsigned().references('id').inTable('tasks').onDelete('CASCADE')
      table.boolean('is_done').defaultTo(false)
      table.specificType('description', 'VARCHAR(255)')
    })
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.raw(`drop table if exists ${TABLE_NAME} cascade;`)
}
