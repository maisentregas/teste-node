import Sequelize from 'sequelize';
import dbConfig from './config/database-config';

const connection = new Sequelize(dbConfig);

export default connection;