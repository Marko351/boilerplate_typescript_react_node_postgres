module.exports = {
  development: {
    client: 'pg',
    debug: false,
    connection: {
      host: 'localhost',
      port: '6432',
      user: 'postgres',
      password: 'postgres',
      database: 'planning_app',
    },
    migrations: {
      directory: './src/migrations',
    },
    seeds: {
      directory: './src/seeds',
    },
  },
};
