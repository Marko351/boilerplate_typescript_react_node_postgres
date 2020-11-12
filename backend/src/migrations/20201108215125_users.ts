import * as Knex from 'knex';

const TABLE_NAME = 'users';

export async function up(knex: Knex): Promise<void> {
  const isExists = await knex.schema.hasTable(TABLE_NAME);
  if (!isExists) {
    await knex.schema.createTable(TABLE_NAME, (table) => {
      table.increments('id').primary();
      table.timestamp('creation_date').notNullable().defaultTo(knex.fn.now());

      table.specificType('user_name', 'VARCHAR(50)');
      table.specificType('email', 'VARCHAR(50)');
      table.specificType('password', 'VARCHAR(255)');
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(TABLE_NAME);
}
