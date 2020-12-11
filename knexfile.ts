import path from 'path'

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'todo',
    user: 'postgres',
    password: 'marcos'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
}