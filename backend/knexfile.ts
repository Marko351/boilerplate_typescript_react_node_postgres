module.exports = {
  development: {
    client: 'pg',
    debug: false,
    connection: {
      host: 'localhost',
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
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
