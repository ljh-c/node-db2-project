// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3'
    },
    useNullAsDefault: true, // only for SQLite
    // generate migration files in data/migrations/ folder
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
