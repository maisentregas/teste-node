const Sequelize = require('sequelize');
const dbConfig = require('../../config/connDB')


const Tarefas = require('../model/Tarefa')

const connection = new Sequelize(dbConfig);
Tarefas.init(connection)

module.exports = connection;