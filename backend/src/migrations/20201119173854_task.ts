import * as Knex from 'knex'

const TABLE_NAME = 'tasks'

export async function up(knex: Knex): Promise<void> {
  const isExists = await knex.schema.hasTable(TABLE_NAME)
  if (!isExists) {
    await knex.schema.createTable(TABLE_NAME, (table) => {
      table.increments('id').primary()
      table.timestamp('creation_date').notNullable().defaultTo(knex.fn.now())

      table.integer('created_by').notNullable().unsigned().references('id').inTable('users')
      table.specificType('name', 'VARCHAR(255)').notNullable()
      table.timestamp('due_date').notNullable()
      table.integer('task_priority')
      table.text('description')
      table.boolean('is_completed')
      table.timestamp('completion_date')
    })
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.raw(`drop table if exists ${TABLE_NAME} cascade;`)
}
