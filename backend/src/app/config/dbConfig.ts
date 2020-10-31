import knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../../knexfile');

const environment = process.env.APP_ENV || 'development';

const connection = knex(config[environment]);
console.log('PostgreSQL');
module.exports = connection;
