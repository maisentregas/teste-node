module.exports = {
  username: 'root',
  password: 'docker',
  database: 'blog',
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}