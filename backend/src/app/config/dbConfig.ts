import knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stringcase = require('knex-stringcase');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../../knexfile');

const environment = process.env.APP_ENV || 'development';

const environmentConfig = stringcase(config[environment]);

const connection = knex(environmentConfig);

export type knexType = ReturnType<typeof knex>;

export { connection as knex };
