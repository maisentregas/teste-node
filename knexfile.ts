import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    host: "localhost",
    database: 'todo',
    user: 'postgres',
    password: 'marcos',
    port: 5432
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  }
}