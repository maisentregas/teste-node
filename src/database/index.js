const sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Todo = require('../app/models/Todo');

const connection = new sequelize(dbConfig);

Todo.init(connection);

module.exports = connection;
